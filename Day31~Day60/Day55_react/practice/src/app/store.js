import { configureStore } from '@reduxjs/toolkit';
import { userInfoApi } from '../TeamCard/userInfo';

export const store = configureStore({
  reducer: {
    [userInfoApi.reducerPath] : userInfoApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userInfoApi.middleware)
})