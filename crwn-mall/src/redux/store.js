import { createStore, applyMiddleware } from "redux";
// Logger
import logger from "redux-logger";
// Root Reducer
import rootReducer from "./rootReducer";

// Middleware
const middleware = [logger];

// Store
const store = createStore(rootReducer, applyMiddleware(...middleware));

// Export store
export default store;
