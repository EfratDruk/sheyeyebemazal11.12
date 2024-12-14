import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { Matchmaker } from "../../models/matchmaker";
import { createMatchmaker, deleteMatchmaker, getMatchmakerById, getMatchmakers, updateMatchmaker } from "../services/matchmakerService";

interface MatchmakerState {
    matchmakers: Matchmaker[];
    selectedMatchmaker?: Matchmaker;
    error: string;
}

const initialState: MatchmakerState = {
    matchmakers: [],
    selectedMatchmaker: undefined,
    error: '',
};



export const fetchMatchmakers = createAsyncThunk<Matchmaker[]>(
    'matchmakers/fetchMatchmakers',
    async () => {
        const matchmakers = await getMatchmakers();
        console.log("slice");  
        return matchmakers;
    }
)

export const fetchMatchmakerById = createAsyncThunk<Matchmaker, number>(
    'matchmakers/fetchMatchmakerById',
    async (id: number) => {
        const matchmaker = await getMatchmakerById(id);
        return matchmaker;
    }
)

export const createNewMatchmaker = createAsyncThunk(
    'matchmakers/createMatchmaker',
    async (matchmaker: Matchmaker) => {
        return await createMatchmaker(matchmaker)
    }
);

export const updateExistingMatchmaker: any= createAsyncThunk(
    'matchmakers/updateMatchmaker',
    async (matchmakerUpdate: { id: number, matchmaker: Matchmaker }) => {
        return await updateMatchmaker(matchmakerUpdate.id, matchmakerUpdate.matchmaker)
    }
);


export const deleteExistingMatchmaker = createAsyncThunk(
    'matchmakers/deleteMatchmaker',
    async (id: number) => {
        await deleteMatchmaker(id);
        return id;
    }
);


const matchmakerSlice = createSlice({
    name: 'matchmakes',
    initialState,
    reducers: {},
    extraReducers: (builder: { addCase: (arg0: any, arg1: { (atate: any, action: any): void; (state: any, action: any): void;  (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; (state: any, action: any): void; }) => void; }) => {

        builder.addCase(fetchMatchmakers.fulfilled, (state: { matchmakers: any; }, action: { payload: any; }) => {
            state.matchmakers = action.payload;
        });
        builder.addCase(fetchMatchmakers.rejected, (state: { error: any; }, action: { error: { message: string; }; }) => {
            state.error = action.error.message || 'failed to fetch matchmaker';
        });
        builder.addCase(fetchMatchmakerById.fulfilled, (state: { selectedMatchmake: any; }, action: { payload: any; }) => {
            state.selectedMatchmake = action.payload;
        });
        builder.addCase(fetchMatchmakerById.rejected, (state: { error: any; }, action: { error: { message: string; }; }) => {
            state.error = action.error.message || 'Failed to fetch matchmaker';
        });
        builder.addCase(createNewMatchmaker.fulfilled, (state: { matchmakers: any[]; }, action: { payload: any; }) => {
            state.matchmakers.push(action.payload);
        });
        builder.addCase(createNewMatchmaker.rejected, (state: { error: any; }, action: { error: { message: string; }; }) => {
            state.error = action.error.message || 'faild to create new matchmaker';
        });
        builder.addCase(updateExistingMatchmaker.fulfilled, (state:{matchmakers:any[]}, action: { payload: { id: number}; }) => {
            const index = state.matchmakers.findIndex((m: { id: any; }) => m.id === action.payload.id);            
            if (index !== -1) {
                state.matchmakers[index] = action.payload;
            }
        });
        builder.addCase(updateExistingMatchmaker.rejected, (state: { error: any }, action: { error: { message: String; }; }) => {
            state.error = action.error.message || 'failed tiupdate '
        })
        builder.addCase(deleteExistingMatchmaker.fulfilled, (state: { matchmakers: any[]; }, action: { payload: any; }) => {
            state.matchmakers = state.matchmakers.filter((m: { matchmakerId: any }) => m.matchmakerId !== action.payload);
        });
        builder.addCase(deleteExistingMatchmaker.rejected, (state: { error: any; }, action: { error: { message: string; }; }) => {
            state.error = action.error.message || 'failed to delete matchmaker'
        });
    }
        });

export default matchmakerSlice.reducer;




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

