import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
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

const persistor = persistStore(store);
export { persistor, store };