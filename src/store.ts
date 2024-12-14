import { configureStore } from "@reduxjs/toolkit";
import matchmakerReducer from "./redux/features/matchmakerSlice";
import userReducer from "./redux/features/userSlice";
import womanReducer from "./redux/features/womanSlice";
import manReducer from "./redux/features/manSlice";
import adjustmentReducer from './redux/features/AdjustmentSlice'
import imageReducer from './redux/features/imgSlice';
import currentStepReducer from "./redux/features/currentStepSlice";

export const store=configureStore(
    {reducer:{
        matchmaker: matchmakerReducer,
        user:userReducer,
        woman:womanReducer,
        man:manReducer,
        adjustment:adjustmentReducer,
        image: imageReducer,
        currentStep:currentStepReducer,



    }}
)

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;