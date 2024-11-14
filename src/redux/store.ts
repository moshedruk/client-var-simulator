
import { configureStore } from "@reduxjs/toolkit";


import { useDispatch, useSelector } from "react-redux";
import organizitionSlice from "./slice/getOrg";
import positionPlayerSlice from "./slice/player";
import usernSlice from "./slice/user";
import eventSlice from "./slice/event";


const store = configureStore({
    reducer: {
        organizition :organizitionSlice.reducer,         
        positionplayer : positionPlayerSlice.reducer,
        user :usernSlice.reducer  ,
        event: eventSlice.reducer  
    }
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store