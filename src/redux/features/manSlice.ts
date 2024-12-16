import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Man } from "../../models/man";
import {
  createMan,
  deleteMan,
  getDto,
  getMan,
  getManById,
  updateMan,
} from "../services/manService";

interface ManState {
  men: Man[];
  selectedMan?: Man;
  error: string;
}

const initialState: ManState = {
  men: [],
  selectedMan: undefined,
  error: "",
};

export const fetchMen = createAsyncThunk<Man[]>("men/fetchMen", async () => {
  const men = await getMan();
  return men;
});

export const fetchManById = createAsyncThunk<Man, number>(
  "men/fetchManById",
  async (id: number) => {
    const man = await getManById(id);
    return man;
  }
);

export const fetchDto = createAsyncThunk<Man, number>(
  "men/fetchDto",
  async (id: number) => {
    const man = await getDto(id);
    return man;
  }
);

export const createNewMan = createAsyncThunk(
  "men/createMan",
  async (man: Man) => {
    return await createMan(man);
  }
);

export const updateExistingMan: any = createAsyncThunk(
  "men/updateMan",
  async (manUpdate: Man) => {
    console.log("in updte", manUpdate);

    return await updateMan(manUpdate.id, manUpdate);
  }
);

export const deleteExistingMan = createAsyncThunk(
  "men/deleteMan",
  async (id: number) => {
    await deleteMan(id);
    return id;
  }
);

const manSlice = createSlice({
  name: "men",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMen.fulfilled, (state, action: PayloadAction<Man[]>) => {
        state.men = action.payload;
      })
      .addCase(fetchMen.rejected, (state, action) => {
        state.error = action.error.message || "failes to fetch man";
      })
      .addCase(fetchManById.fulfilled, (state, action: PayloadAction<Man>) => {
        state.selectedMan = action.payload;
      })
      .addCase(fetchManById.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch matchmaker";
      })
      .addCase(fetchDto.fulfilled, (state, action: PayloadAction<Man>) => {
        state.selectedMan = action.payload;
      })
      .addCase(fetchDto.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch matchmaker";
      })
      .addCase(createNewMan.fulfilled, (state, action: PayloadAction<Man>) => {
        state.men.push(action.payload);
      })
      .addCase(createNewMan.rejected, (state, action) => {
        state.error = action.error.message || "faild to create new matchmaker";
      })
      .addCase(
        updateExistingMan.fulfilled,
        (state, action: PayloadAction<Man>) => {
          const index = state.men.findIndex(
            (m: { id: number }) => m.id === action.payload.id
          );
          if (index !== -1) {
            state.men[index] = action.payload;
          }
        }
      )
      .addCase(updateExistingMan.rejected, (state, action) => {
        state.error = action.error.message || "failed tiupdate ";
      })
      .addCase(
        deleteExistingMan.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.men = state.men.filter(
            (m: { id: number }) => m.id !== action.payload
          );
        }
      )
      .addCase(deleteExistingMan.rejected, (state, action) => {
        state.error = action.error.message || "failed to delete matchmaker";
      });
  },
});

export default manSlice.reducer;
