import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({user: userReducer}); // to combine reducers together into one reducer

const persistConfig ={ // to store configuration of persitor reducer
    key: 'root',
    storage,
    version: 1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)// to wrap root reducer into persisted state so that we  can implement persistence



export const store = configureStore({  // to store and mange reducers
  reducer:  persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,  // to avoid serializing error in browser
    }),
});

export const persistor = persistStore(store);