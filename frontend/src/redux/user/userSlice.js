import { createSlice } from "@reduxjs/toolkit";




const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload, 
      state.error = null,
      state.loading = false;
    },
    signInFailure: (state, action) => {
        state.error = action.payload,
        state.loading = false
    },
    clearLocalStorageItem: (state, action) => {
      storage.removeItem('persist:root') // Remove a specific item
    },
  },
});

export const {signInStart, signInSuccess,signInFailure,clearLocalStorageItem} = userSlice.actions;

export default userSlice.reducer;