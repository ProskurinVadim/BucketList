import { createStore, applyMiddleware, compose } from "redux";
import { DispatchBucetsType } from "./actions/bucketActions"
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { persistStore } from 'redux-persist';
import thunk from "redux-thunk";
import persisterReducer from "./reducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    persisterReducer,
    composeEnhancers(applyMiddleware(thunk))
);

// Add root state for useSelector
export type RootState = ReturnType<typeof store.getState>;
// Add root dispatch for useSelector
export type RootDispatch = typeof store.dispatch
export type RootDispatchhFunc = () => RootDispatch
export const useAppDispatch: RootDispatchhFunc = useDispatch
const persistor = persistStore(store);
export { persistor, store };