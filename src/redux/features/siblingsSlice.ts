import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { Siblings } from "../../models/siblings";
import { createSiblings, deleteSiblings, getSiblings, getSiblingsById, updateSiblings } from "../services/siblingsService";

interface SiblingsState {
    siblings: Siblings[];
    selectedSiblings?: Siblings;
    error: string;
}

const initialState: SiblingsState = {
    siblings: [],
    selectedSiblings: undefined,
    error: '',
};



export const fetchSiblings = createAsyncThunk<Siblings[]>(
    'siblings/fetchSiblings',
    async () => {
        const siblings = await getSiblings();
        return siblings;
    }
)

export const fetchSiblingsById = createAsyncThunk<Siblings, number>(
    'siblings/fetchsiblingsById',
    async (id: number) => {
        const siblings = await getSiblingsById(id);
        return siblings;
    }
)

export const createNewSiblings = createAsyncThunk(
    'siblings/createSiblings',
    async (siblings: Siblings) => {
        return await createSiblings(siblings)
    }
);

export const updateExistingSiblings: any= createAsyncThunk(
    'siblings/updateSiblings',
    async (siblingsUpdate: { id: number, siblings: Siblings }) => {
        return await updateSiblings(siblingsUpdate.id, siblingsUpdate.siblings)
    }
);


export const deleteExistingSiblings = createAsyncThunk(
    'siblings/deleteSiblings',
    async (id: number) => {
        await deleteSiblings(id);
        return id;
    }
);


const siblingsSlice = createSlice({
    name: 'siblings',
    initialState,
    reducers: {},
    extraReducers: (builder: { addCase: (arg0: any, arg1: { (atate: any, action: any): void; (state: any, action: any): void;  (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; }) => void; }) => {

        builder.addCase(fetchSiblings.fulfilled, (state: { siblings: any; }, action: { payload: any; }) => {
            state.siblings = action.payload;
        });
        builder.addCase(fetchSiblings.rejected, (state: { error: any; }, action: { error: { message: string; }; }) => {
            state.error = action.error.message || 'failes to fetch siblings';
        });
        builder.addCase(fetchSiblingsById.fulfilled, (state: { selectedSiblings: any; }, action: { payload: any; }) => {
            state.selectedSiblings = action.payload;
        });
        builder.addCase(fetchSiblingsById.rejected, (state: { error: any; }, action: { error: { message: string; }; }) => {
            state.error = action.error.message || 'Failed to fetch siblings';
        });
        builder.addCase(createNewSiblings.fulfilled, (state: { siblings: any[]; }, action: { payload: any; }) => {
            state.siblings.push(action.payload);
        });
        builder.addCase(createNewSiblings.rejected, (state: { error: any; }, action: { error: { message: string; }; }) => {
            state.error = action.error.message || 'faild to create new siblings';
        });
        builder.addCase(updateExistingSiblings.fulfilled, (state:{siblings:any[]}, action: { payload: { id: number}; }) => {
            const index = state.siblings.findIndex((s: { id: any; }) => s.id === action.payload.id);            
            if (index !== -1) {
                state.siblings[index] = action.payload;
            }
        });
        builder.addCase(updateExistingSiblings.rejected, (state: { error: any }, action: { error: { message: String; }; }) => {
            state.error = action.error.message || 'failed to update siblings'
        })
        builder.addCase(deleteExistingSiblings.fulfilled, (state: { siblings: any[]; }, action: { payload: any; }) => {
            state.siblings = state.siblings.filter((s: { siblingsId: any }) => s.siblingsId !== action.payload);
        });
        builder.addCase(deleteExistingSiblings.rejected, (state: { error: any; }, action: { error: { message: string; }; }) => {
            state.error = action.error.message || 'failed to delete siblings'
        });
    }
        });

export default siblingsSlice.reducer;




// of teacer////////////////-----------------
// export const matchmakerSlice= createSlice({
//     name:'matchmaker',
//     initialState,
//     reducers:{
//         addMatchmaker:(state, action)=>{
//             state.matchmakers.push(action.payload);
//         }

//     }

// })

// export const{addMatchmaker}=matchmakerSlice.actions;
// export default matchmakerSlice.reducer

