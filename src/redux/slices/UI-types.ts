
export type Theme = 'light' | 'dark'
export type Category = 'all' | 'work' | 'personal' | 'social' | 'finance' | 'other'
export type ModalType = 'edit' | 'delete' | null
export type ToastType = 'success' | 'error' | 'info'

export interface UiState {
  theme: Theme
  activeCategory: Category
  searchQuery: string
  showModal: boolean
  modalType: ModalType
  selectedPasswordId: string | null
  toast: Toast
}

interface Toast {
  show: boolean
  message: string
  type: ToastType
}