import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


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
 