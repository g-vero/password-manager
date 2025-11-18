import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Password, PasswordsState } from "./passwords-types"

const initialState: PasswordsState = {
  list: [],
  isLoading: false,
  error: null
}

const passwordsSlice = createSlice({
  name: 'passwords',   
  initialState, 
  reducers: {    
    addPassword: (state, action: PayloadAction<Password>) => {
      state.list.push(action.payload)
    },
    deletePassword: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(item => item.id === action.payload)
    },
    updatePassword: (state, action: PayloadAction<{id: string, updates: Partial<Password>}>) => {
      const passIndex = state.list.findIndex(item => item.id === action.payload.id)
      if (passIndex !== -1) {
        state.list[passIndex] = {
          ...state.list[passIndex],
          ...action.payload.updates
        }
      } 
    },
    clearAllPasswords: (state) => {
      state.list = []
    }
  }
})

export const { 
  addPassword, 
  deletePassword, 
  updatePassword, 
  clearAllPasswords 
} = passwordsSlice.actions

export default passwordsSlice.reducer 