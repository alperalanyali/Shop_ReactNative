import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { create } from 'react-test-renderer';

export interface UserState{
    
}

const initialState:UserState = {
   
};

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state,action) => {
            console.log(action.payload);
            AsyncStorage.setItem("@USER",JSON.stringify(action.payload));
            return {...state,user:action.payload};

        },
        removeUser:(state)=>{
            AsyncStorage.removeItem('@USER');
            return {...state, user: null};
        }
    }
})

export const {setUser,removeUser} = userSlice.actions;

export default userSlice.reducer