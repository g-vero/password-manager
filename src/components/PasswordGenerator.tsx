import { useState } from 'react'
import { useGeneratePassword } from '../hooks/useGeneratePassword'
import styles from './PasswordGenerator.module.css'

export const PasswordGenerator = () => {

  const [chars, setCharsNum] = useState<number>(8)
  const [includesSpecialChar, setIncludeSpecialChar] = useState<boolean>(false)
  const { password, generatePassword } = useGeneratePassword(chars, includesSpecialChar)

  const copyPassword = async () => {
    if (password) {
      try {
        await navigator.clipboard.writeText(password)
        alert("copiata")
      } catch (err) {
        alert("errore")
      }
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.password}>
        <input readOnly value={password} className="password"></input>
        <button type="button" onClick={copyPassword}>Copy</button>
        <button type="button" onClick={generatePassword}>Generate</button>
      </div>
      <input type="range" min="8" max="20" value={chars} onChange={e => setCharsNum(Number(e.target.value))} className="chras-num"></input>
      <div className="options">
        <label>
          <input type="checkbox" checked={includesSpecialChar} onChange={e => setIncludeSpecialChar(e.target.checked)} />
          Special Characters
        </label>
      </div>
    </div>
  )
}

