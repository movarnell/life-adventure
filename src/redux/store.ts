import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { gameReducer } from "./gameSlice";

export const store = configureStore({ 
    reducer: {
        game: gameReducer
    }
})

export type AppStore = typeof store

export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']

export const useAppDispatch: () => AppDispatch = useDispatch