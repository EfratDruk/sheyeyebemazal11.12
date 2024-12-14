import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { upload } from '../services/imgService';

interface ImageState {
    imageUrl: string | null;
    //   loading: boolean;
    selectedUser: any,
    error: string | null;
}

const initialState: ImageState = {
    imageUrl: '',
    selectedUser: '',
    //   loading: false,
    error: '',
};


export const fetchUpload = createAsyncThunk(
    'image/uploadImage',
    async (
        formData:FormData , thunkAPI) => {
        try {
            // console.log("sending user+img",user, image);
            
            // const formData=new FormData();
            // formData.append("user", new Blob([JSON.stringify(user)], { type: 'application/json' }));
            // formData.append("image", image);
            // console.log("(formData.append",formData.append);
            // console.log("formData i am in slice img",formData);
            
            const response = await upload(formData);
            
            return response;
        } catch (error) {
            console.log("error in upload", error);
            return thunkAPI.rejectWithValue("Upload failed");

        }
    }
)

const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUpload.fulfilled, (state, action) => {
                // state.loading = false;
                console.log("addcase",action.payload);
                state.selectedUser = action.payload;
                state.imageUrl=action.payload.photo;
            })
            .addCase(fetchUpload.rejected, (state, action) => {
                // state.loading = false;
                state.error = action.error.message || 'faild';
            });
    },
});

export default imageSlice.reducer;
