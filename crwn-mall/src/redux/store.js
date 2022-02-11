import { createStore, applyMiddleware } from "redux";
// Logger
import logger from "redux-logger";
// Root Reducer
import rootReducer from "./rootReducer";
// Redux Persist
import { persistStore } from "redux-persist";

// Middleware
const middleware = [logger];

// Store
const store = createStore(rootReducer, applyMiddleware(...middleware));

// Persistor
const persistor = persistStore(store);

// Export store
export { store, persistor };
