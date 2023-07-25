// import { configureStore } from '@reduxjs/toolkit';

// import { contactsReducer } from './contactsSlice';
// import { filterReducer } from './filterSlice';
// import { authReducer } from './auth/auth-slice';
// // Створення state-configureStore Redux
// export const store = configureStore({
//   reducer: {
//     // Reducer для управління станом контактів
//     contacts: contactsReducer,
//     // Reducer для управління станом фільтру
//     filter: filterReducer,

//     auth: authReducer,
//   },

// });

// //====================================
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contacts/contactsSlice';
import { authReducer } from './auth/auth-slice';
import { filterReducer } from './contacts/filterSlice';


// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // devTools: Enabling Redux DevTools extension in development mode
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

//====================================