import { configureStore } from "@reduxjs/toolkit"
import { clicksReducer } from "./clickSlice"
import { persistStore } from "redux-persist"


export const store = configureStore({
    reducer: {
        clicks: clicksReducer,
    }, 
})

export const persistor = persistStore(store)
