import logger from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit'
import productsReducers from './products/slice'

export const store = configureStore({
  reducer: {
    products: productsReducers
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch