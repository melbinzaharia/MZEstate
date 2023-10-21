import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
<<<<<<< HEAD
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({ user: userReducer });

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
=======
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
>>>>>>> 0686cd72b435f4e74692ec766cc091a2e1cf0232
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,  // to avoid serializing error in browser
    }),
});

<<<<<<< HEAD

=======
>>>>>>> 0686cd72b435f4e74692ec766cc091a2e1cf0232
export const persistor = persistStore(store);