import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { upload } from '../services/imgService';

interface ImageState {
    image: string | null;
    //   loading: boolean;
    selectedUser: any,
    error: string | null;
}

const initialState: ImageState = {
    image: '',
    selectedUser: '',
    //   loading: false,
    error: '',
};


export const fetchUpload = createAsyncThunk(
    'image/uploadImage',
    async (
        formData:FormData , thunkAPI) => {
        try {
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
    reducers: {
        updateImage: (state, action) => {
            // state.loading = false;
       
            state.image=action.payload.photo;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUpload.fulfilled, (state, action) => {
                // state.loading = false;
                console.log("addcase",action.payload);
                state.selectedUser = action.payload;
                state.image=action.payload.photo;
            })
            .addCase(fetchUpload.rejected, (state, action) => {
                // state.loading = false;
                state.error = action.error.message || 'faild';
            });
    },
});
export const {updateImage} = imageSlice.actions;

export default imageSlice.reducer;
