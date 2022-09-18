import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'; 
import userReducer from './reducers';
import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}

const reducers = combineReducers({
    staff: userReducer
}); 

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
})