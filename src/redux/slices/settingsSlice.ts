import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface SettingsState {
  length: number
  includeUppercase: boolean
  includeLowercase: boolean
  includeNumbers: boolean
  includeSymbols: boolean
}

const initialState: SettingsState = {
  length: 16,
  includeUppercase: true,
  includeLowercase: true,
  includeNumbers: true,
  includeSymbols: true
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    updateLength: (state, action: PayloadAction<number>) => {
      state.length = action.payload
    },
    
    toggleUppercase: (state) => {
      state.includeUppercase = !state.includeUppercase
    },
    
    toggleLowercase: (state) => {
      state.includeLowercase = !state.includeLowercase
    },
    
    toggleNumbers: (state) => {
      state.includeNumbers = !state.includeNumbers
    },
    
    toggleSymbols: (state) => {
      state.includeSymbols = !state.includeSymbols
    },
    
    resetSettings: () => initialState
  }
})

export const {
  updateLength,
  toggleUppercase,
  toggleLowercase,
  toggleNumbers,
  toggleSymbols,
  resetSettings
} = settingsSlice.actions

export default settingsSlice.reducer