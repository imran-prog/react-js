import { combineReducers } from "redux";
// Reducers
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
// Persist
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whilelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
