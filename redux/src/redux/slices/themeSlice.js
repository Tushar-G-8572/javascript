import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name:"theme",
    initialState:{
        value:"light"
    },
    reducers:{
        changeThermeToLight:(state)=>{
            state.value = 'light'
        },
        changeThermeToDark:(state)=>{
            state.value = 'dark'
        }
    }
})

export const {changeThermeToDark,changeThermeToLight} = themeSlice.actions;

export default themeSlice.reducer;