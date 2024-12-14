import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { createMan, deleteMan, getMan, getManById, updateMan } from "../services/manService";
import { Adjustment } from "../../models/adjustment";
import { createAdjustment, getAdjustmentById, getAdjustments, updateAdjustment } from "../services/AdjustmentService";
import { Man } from "../../models/man";
import { Woman } from "../../models/woman";
import { StatusAdjustment } from "../../models/enums";

interface AdjustmentState {
    adjustments: Adjustment[];
    selectedAdjustment?: Adjustment;
    error: string;
}

const initialState: AdjustmentState = {
    adjustments: [],
    selectedAdjustment: undefined,
    error: '',
};



export const fetchAdjustments = createAsyncThunk<Adjustment[]>(
    'Adjustment/fetchAdjustments',
    async () => {
        const adjustments = await getAdjustments();
        return adjustments;
    }
)

export const fetchAdjustmentById = createAsyncThunk<Adjustment, number>(
    'adjusment/fetchAdjustmentById',
    async (id: number) => {
        const adjustment = await getAdjustmentById(id);
        return adjustment;
    }
)

// export const createNewAdjustment = createAsyncThunk(
//     'adjustment/createAdjustment',
//     async ({man,woman}:{man:Man, woman:Woman}) => {
//         try {
//             const adjustment = await createAdjustment(man,woman)
//             console.log("adjustment",adjustment);
//             return adjustment;
//         } catch (error) {
//             console.log("closed today");
//             console.log(error);
//         }
//     }
// );

export const createNewAdjustment = createAsyncThunk(
    'adjustment/createAdjustment', // שם הפעולה ב-Redux
    async ({ man, woman }: { man: Man; woman: Woman }) => {
        console.log("man & woman in slice", man,woman);
        
      try {
        // קריאה לפונקציה ליצירת adjustment
        const adjustment = await createAdjustment( man, woman );
        console.log("Created adjustment:", adjustment);
        return adjustment;  // מחזיר את התוצאה שהתקבלה
      } catch (error) {
        console.error("Error creating adjustment:", error);
        throw error;  // משליך שגיאה אם משהו לא הלך כמו שצריך
      }
    }
  );

export const updateExistingAdjustment = createAsyncThunk(
    'adjustment/updateExistingAdjustment', 
    async ({id, adjustment}: { id: number; adjustment: Adjustment }) => {
        console.log("{id, adjustment} in slice",id, adjustment);
        
        return await updateAdjustment(id, adjustment)
    }
);


// export const deleteExistingMan = createAsyncThunk(
//     'men/deleteMan',
//     async (id: number) => {
//         await deleteMan(id);
//         return id;
//     }
// );


const adjustmentSlice = createSlice({
    name: 'adjustment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAdjustments.fulfilled, (state, action: PayloadAction<any>) => {
                state.adjustments = action.payload;
            })
            .addCase(fetchAdjustments.rejected, (state, action) => {
                state.error = action.error.message || "failed";
            })

        // builder.addCase(fetchManById.fulfilled, (state: { selectedMan: any; }, action: { payload: any; }) => {
        //     state.selectedMan = action.payload;
        // });
        // builder.addCase(fetchManById.rejected, (state: { error: any; }, action: { error: { message: string; }; }) => {
        //     state.error = action.error.message || 'Failed to fetch matchmaker';
        // });
        .addCase(createNewAdjustment.fulfilled, (state, action: PayloadAction<Adjustment>) => {
            state.adjustments.push(action.payload);
        })
        .addCase(createNewAdjustment.rejected, (state, action) => {
            state.error = action.error.message || 'faild to create new adjustment';
        })
        // builder.addCase(updateExistingMan.fulfilled, (state: { men: any[] }, action: { payload: { id: number }; }) => {
        //     const index = state.men.findIndex((m: { id: any; }) => m.id === action.payload.id);
        //     if (index !== -1) {
        //         state.men[index] = action.payload;
        //     }
        // });
        // builder.addCase(updateExistingMan.rejected, (state: { error: any }, action: { error: { message: String; }; }) => {
        //     state.error = action.error.message || 'failed tiupdate '
        // })
        // builder.addCase(deleteExistingMan.fulfilled, (state: { men: any[]; }, action: { payload: any; }) => {
        //     state.men = state.men.filter((m: { manId: any }) => m.manId !== action.payload);
        // });
        // builder.addCase(deleteExistingMan.rejected, (state: { error: any; }, action: { error: { message: string; }; }) => {
        //     state.error = action.error.message || 'failed to delete matchmaker'
        // });

    }

})

export default adjustmentSlice.reducer;
