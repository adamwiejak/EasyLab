import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import gravimetricVolume from "./gravimetric-volume-slice/slice";

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

const rootReducer = { gravimetricVolume };

const store = configureStore({ reducer: rootReducer });

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
