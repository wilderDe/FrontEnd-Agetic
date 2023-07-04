
import { configureStore } from '@reduxjs/toolkit'
import smarthSlice from './features/smarthSlice'

 
export const store =  configureStore({
    reducer:{
        smarthSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch