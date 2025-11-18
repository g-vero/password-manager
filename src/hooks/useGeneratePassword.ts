import { useCallback, useEffect, useState } from "react"

const UNDERCASE = 'abcdefghijklmnopqrstuvwxyz'
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const NUMBERS = '0123456789'
const SPECIALCHARS = '!@#$%^&*()_-+=[]{}<>?'

export const useGeneratePassword = (chars: number, includesSpecialChar: boolean) => {

  const [password, setPassword] = useState<string>()

  const generatePassword = useCallback(() => {

    const basePool = UNDERCASE.concat(UPPERCASE).concat(NUMBERS)

    const pool = includesSpecialChar ? basePool.concat(SPECIALCHARS) : basePool

    let newPassword = "";

    for (let i = 1; i <= chars; i++) {
      const array = new Uint8Array(1)
      window.crypto.getRandomValues(array)
      const randomNumber = array[0] % pool.length
      newPassword += pool[randomNumber]
    }

    setPassword(newPassword)
  }, [chars, includesSpecialChar])

  useEffect(() => {
    generatePassword()
  }, [generatePassword])


  return {
    password,
    generatePassword
  }
}