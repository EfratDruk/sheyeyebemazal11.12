import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Woman } from "../../models/woman";
import {
    createWoman,
    deleteWoman,
    getWoman,
    getWomanById,
    getWomanDto,
    updateWoman,
} from "../services/womanService";

interface WomanState {
  woman: Woman[];
  selectedWoman?: Woman;
  error: string;
}

const initialState: WomanState = {
  woman: [],
  selectedWoman: undefined,
  error: "",
};

export const fetchWoman = createAsyncThunk<Woman[]>(
  "woman/fetchWoman",
  async () => {
    console.log("fetch woman");

    const woman = await getWoman();
    return woman;
  }
);

export const fetchWomanById = createAsyncThunk<Woman, number>(
  "woman/fetchWomanById",
  async (id: number) => {
    const woman = await getWomanById(id);
    return woman;
  }
);

export const getDTO = createAsyncThunk<Woman, number>(
  "woman/getDTO",
  async (id: number) => {
    const woman = await getWomanDto(id);
    return woman;
  }
);
export const createNewWoman = createAsyncThunk(
  "woman/createWoman",
  async (woman: Woman) => {
    return await createWoman(woman);
  }
);

export const updateExistingWoman: any = createAsyncThunk(
  "woman/updateWoman",
  async (womanUpdate: Woman) => {
    return await updateWoman(womanUpdate.id, womanUpdate);
  }
);

export const deleteExistingWoman = createAsyncThunk(
  "woman/deleteWoman",
  async (id: number) => {
    await deleteWoman(id);
    return id;
  }
);

const womanSlice = createSlice({
  name: "woman",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchWoman.fulfilled,
        (state, action: PayloadAction<Woman[]>) => {
          state.woman = action.payload;
        }
      )
      .addCase(fetchWoman.rejected, (state, action) => {
        state.error = action.error.message || "failes to fetch woman";
      })
      .addCase(
        fetchWomanById.fulfilled,
        (state, action: PayloadAction<Woman>) => {
          state.selectedWoman = action.payload;
          console.log("state.selectedWoman", state.selectedWoman);
        }
      )
      .addCase(fetchWomanById.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch woman";
      })
      .addCase(getDTO.fulfilled, (state, action: PayloadAction<Woman>) => {
        state.selectedWoman = action.payload;
        console.log("state.selectedWoman", state.selectedWoman);
      })
      .addCase(getDTO.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch woman";
      })
      .addCase(
        createNewWoman.fulfilled,
        (state, action: PayloadAction<Woman>) => {
          state.woman.push(action.payload);
        }
      )
      .addCase(createNewWoman.rejected, (state, action) => {
        state.error = action.error.message || "faild to create new woman";
      })
      .addCase(
        updateExistingWoman.fulfilled,
        (state, action: PayloadAction<Woman>) => {
          const index = state.woman.findIndex(
            (w: { id: number }) => w.id === action.payload.id
          );
          if (index !== -1) {
            state.woman[index] = action.payload;
          }
        }
      )
      .addCase(updateExistingWoman.rejected, (state, action) => {
        state.error = action.error.message || "failed to update woman";
      })
      .addCase(
        deleteExistingWoman.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.woman = state.woman.filter(
            (w: { id: number }) => w.id !== action.payload
          );
        }
      )
      .addCase(deleteExistingWoman.rejected, (state, action) => {
        state.error = action.error.message || "failed to delete woman";
      });
  },
});

export default womanSlice.reducer;
