import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signIn, signUp } from '../services/userService.ts'
import { UserData } from "../../models/UserData.ts";
import { Man } from "@mui/icons-material";
import MatchmakerList from "../../components/matchmakerList.tsx";
import { BrowserRouter, Routes } from "react-router-dom";
import { Users } from "../../models/users.ts";
import { Requirements } from "../../models/requirements.ts";
import { His } from "../../models/his.ts";
import { createHis } from "../services/hisService.ts";
import { Her } from "../../models/her.ts";
import { createHer } from "../services/herService.ts";
import { useSelector } from "react-redux";
import { RootState } from "../../store.ts";

interface userState {
    user?: Users;
    error: string;
}
const initialState: userState = {
    user: undefined,
    error: '',
};

export const fetchSignIn = createAsyncThunk<Users, { userData: UserData; navigate: (path: string) => void }>(
    'user/signIn',
    async (userData: any) => {
        try {
            console.log("userData", userData.userData);
            const user = await signIn(userData.userData)
            console.log("iserr",user);
            
            if (!user) {
                userData.navigate("/SignUp");  
        }
           
            console.log("userData", userData.userData);
            console.log("user got from server",user.status);
            
            console.log("type", typeof (user));
            localStorage.setItem("user", JSON.stringify(user));
            switch (user.gender) {
                //not haapend 
                //bcs mm doesnt have gander
                case 'MATCHMAKER':
                    console.log("mm-----");
                    
                    userData.navigate("/MatchmakerList");
                    console.log("navigate");

                    break;
                case 'MAN': {
                    userData.navigate("/ManHomePage");
                }
                    break;
                case 'WOMAN':
                    userData.navigate("/WomanHomePage");
                    break;
                default:
                    console.log("mm-----");
                    userData.navigate("/MMHomePage");
                    console.log("navigate");
                    return user;
            }
        
        } catch (error) {
            // return thunkAPI.rejectWithValue(error)
            console.log("error",error);
            
            if (error.status == 404) {
                userData.navigate("/SignUp");
            }
            if(error.status==409){
                const wrongPassword = window.confirm("Are you sure you want to log out?");
                if (wrongPassword) {
                  userData.navigate('/SignIn')
                }
           
            }
            console.log("the error------", error);

        }
    }
)

export const fetchSignUp = createAsyncThunk<any, Users>(
    'user/fetchsignUp',
    async (userData: Users) => {
        try {
            console.log("done", userData);
            const user = await signUp(userData)
            const res=localStorage.setItem("user", JSON.stringify(user));
            return user;
        } catch (error) {
            console.log("closed today");
            if (error.status == 409) {
                console.log("הסיסמה הזו תפוסה נסה אחרת"); 
                // Users.navigate("/SignUp");
            }
            console.log(error);

        }
    }
)


export const fetchHis = createAsyncThunk<His, His>(
    'user/fetchHis',
    async (his: His) => {
        try {
            console.log("in fetch requirment", his);
            const newHis = await createHis(his)
            console.log("newHis", newHis);  
            return newHis;
        }
        catch (error) {
            console.log("faild to add his");
            console.log(error);
        }
    }
)

export const fetchHer = createAsyncThunk<any, Her>(
    'user/fetchHer',
    async (her: Her) => {
        
        try {
            console.log("in fetch requirment", her);
            const newHer = await createHer(her)
            return newHer;
        }
        catch (error) {
            console.log("faild to add her");
            console.log(error);
        }
    }
)
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout:()=>{
            localStorage.removeItem('user');
            //send to homepage
        },
        updateUser: (state, action: PayloadAction<Users|undefined>) => {
            console.log("action in update", action.payload);
            if (!state.user) {
                // state.user = {};
                console.log("in update----------");
            }

            state.user={...state.user,...action.payload};
            console.log("state.user",state.user);

        
            
        },

        update:(state, action:PayloadAction<His>)=>{
            console.log("update hisss");
            console.log("action",action);
            
            state.user={...state.user, his:action.payload}  
            console.log("state.user",state.user);
            return state.user

        }
        // updateImg:(state: WritableDraft<Users>, action:PayloadAction<File>)=>{
        //     try{
        //         state.user?.imagePath={...state.user, action}
        //     }
        //     catch(error:Error){
        //         console.log("error in updateImg", error.message);
                
        //     }
        // }
    },
    extraReducers: (builder => {
        builder
            .addCase(fetchSignIn.fulfilled, (state, action: PayloadAction<any>) => {
                state.user = action.payload;
            })
            .addCase(fetchSignIn.rejected, (state, action) => {
                state.error = action.error.message || 'failed'
            })
            .addCase(fetchHer.fulfilled, (state, action: PayloadAction<any>) => {
                state.user.her = action.payload;
            })
            .addCase(fetchHer.rejected, (state, action) => {
                state.error = action.error.message || 'failed'
            })
            .addCase(fetchHis.fulfilled, (state, action: PayloadAction<any>) => {
                state.user = action.payload;
                
                
            })
            .addCase(fetchHis.rejected, (state, action) => {
                state.error = action.error.message || 'failed'
            })
            .addCase(fetchSignUp.fulfilled, (state, action: PayloadAction<any>) => {
                state.user = action.payload;
            })
            .addCase(fetchSignUp.rejected, (state, action) => {
                state.error = action.error.message || 'failed'
            })
    })
})

export const { updateUser ,logout, update} = userSlice.actions;
export default userSlice.reducer;