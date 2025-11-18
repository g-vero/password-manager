export interface Password {
  id: string
  title: string
  password: string
  category: 'work' | 'personal' | 'social' | 'finance' | 'other'
  createdAt: string
  strength: 'weak' | 'medium' | 'strong' | 'very-strong'
}

export interface PasswordsState {
  list: Password[]
  isLoading: boolean
  error: string | null
}
