import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/Auth/AuthSlice'
import goalReducers from '../features/Goal/GoalSlice';

export const store = configureStore({
  reducer: {
    auth:authReducer,
    goals:goalReducers
  },
});

