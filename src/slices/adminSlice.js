import { createSlice } from "@reduxjs/toolkit";

const admin = JSON.parse(localStorage.getItem("admin"));

// const initialState = admin
//   ? { isLoggedIn: true, admin }
//   : { isLoggedIn: false, admin: null };


const initialState = { isLoggedIn: false, admin: null };

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        // register: (state, action) => {
        //     state.isLoggedIn = false;
        // },
        loginAdmin: (state, action) => {
            state.isLoggedIn = true;
            console.log('inside adminslice: ', action.payload);
            state.admin = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.admin = null;
        },
        // uploadProfileImage: (state, action) => {
        //     state.admin.image = action.payload;
        // }
    }
});

export const { loginAdmin, logout } = adminSlice.actions;
export default adminSlice.reducer;