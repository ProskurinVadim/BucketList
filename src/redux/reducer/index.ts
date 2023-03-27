import { combineReducers } from "redux";
import { persistStore, persistReducer, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import bucketReducer from "./bucketReducer";

const rootPersistConfig = {
    key: 'root',
    storage: storage,
}

const buketPersistConfig = {
    key: 'buket_list',
    storage: storage,
}


const  rootReducer = combineReducers({
    buket_list: persistReducer(buketPersistConfig, bucketReducer)
})

export default persistReducer(rootPersistConfig, rootReducer)
