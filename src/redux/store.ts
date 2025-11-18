import { configureStore } from '@reduxjs/toolkit'
import passwordsReducer from './slices/passwordsSlice'
import settingsReducer from './slices/settingsSlice'
import uiReducer from './slices/UISlice'

const store = configureStore({
  reducer: {
    passwords: passwordsReducer,
    settings: settingsReducer,
    ui: uiReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch