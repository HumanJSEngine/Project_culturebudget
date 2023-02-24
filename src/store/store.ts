import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './userReducer';
import settingReducer from './settingReducer';

const reducers = combineReducers({
  user: userReducer.reducer,
  setting: settingReducer.reducer,
});

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user', 'setting'],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
