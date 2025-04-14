import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "root",
  storage,
  whitelist: ["token"],
};

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);

import contactsReducer from "./contacts/slice";
import filterReducer from "./filters/slice";
import authReducer from "./auth/slice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,

    auth: authPersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
