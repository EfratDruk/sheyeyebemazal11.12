import { createSlice } from "@reduxjs/toolkit";

interface CurrentStepState {
    currentStep: number;
    error: string;
}

const initialState: CurrentStepState = {
    currentStep: 0,
    error: '',
}


const currentStepSlice=createSlice({
    name:'currentStep',
    initialState,
    reducers: {
        nextStep:(state)=>{
            console.log("+1+++++++++++++++++++");
            
            state.currentStep+=1;
        },
        previousStep:(state)=>{
            state.currentStep-=1;
        },
        restartStep:(state)=>{
            state.currentStep=0
        }  
    },
})

export const {nextStep, previousStep, restartStep}=currentStepSlice.actions
export default currentStepSlice.reducer;