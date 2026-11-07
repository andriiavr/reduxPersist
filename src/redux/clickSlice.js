import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage';


export const clickSlice = createSlice({
    name: "clicks",
    initialState: {
    value: 0
    },
    reducers: {
        update: (state, action) => {
            state.value += action.payload
        }
    }
})
 
const persistConfig = {
    key: 'clicks',
    storage,
    whitelist: ['value']
}

export const clicksReducer = persistReducer(persistConfig, clickSlice.reducer) 

export const {update} = clickSlice.actions

export const getClicksValue = state => state.clicks.value