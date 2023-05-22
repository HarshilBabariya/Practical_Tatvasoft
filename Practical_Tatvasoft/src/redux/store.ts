import { combineReducers, createStore } from "redux";
import { formReducer } from "./reducers/formReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  form: formReducer,
});
const persistReducers = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistReducers);
export const persistor = persistStore(store);