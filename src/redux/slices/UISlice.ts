import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Category, ToastType, UiState } from "./UI-types";

const initialState: UiState = {
  theme: 'light',
  activeCategory: 'all',
  searchQuery: '',
  showModal: false,
  modalType: null,
  selectedPasswordId: null,
  toast: {
    show: false,
    message: '',
    type: 'success'
  }
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light'
        },
        setActiveCategory: (state, action: PayloadAction<Category>) => {
            state.activeCategory = action.payload
        },
          setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload
        },
        openModal: (state, action:PayloadAction<{
            type: 'edit' | 'delete',
            passwordId: string
        }>) => {
            state.showModal = true
            state.modalType = action.payload.type
            state.selectedPasswordId = action.payload.passwordId
        },
        closeModal: (state) => {
            state.showModal = false
            state.modalType = null
            state.selectedPasswordId = null
        },
        showToast: (state, action: PayloadAction<{
            message: string
            type: ToastType
        }>) => {
            state.toast = {
                show: true,
                message: action.payload.message,
                type: action.payload.type
            }
        },
            
            hideToast: (state) => {
                state.toast.show = false
        }
    }
})

export const {
    toggleTheme,
    setActiveCategory,
    setSearchQuery,
    openModal,
    closeModal,
    showToast,
    hideToast
} = uiSlice.actions

export default uiSlice.reducer