
import { configureStore } from "@reduxjs/toolkit";


import { useDispatch, useSelector } from "react-redux";
import organizitionSlice from "./slice/getOrg";
import positionPlayerSlice from "./slice/player";


const store = configureStore({
    reducer: {
        organizition :organizitionSlice.reducer,         
        positionplayer : positionPlayerSlice.reducer    
    }
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store