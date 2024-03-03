import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: "main",
    initialState:{
        navOpenFlag:true,
    },
    reducers:{
        toggleNavBar: (state) =>{
            state.navOpenFlag = !state.navOpenFlag;
        },
        closeNavBar: (state) =>{
            state.navOpenFlag = false;
        }
    }
});

export const {toggleNavBar,closeNavBar} = mainSlice.actions;
export default mainSlice.reducer;