import type { User } from '@/types/user'
import { deleteCookie, hasCookie, setCookie, getCookie } from 'cookies-next'
import { createContext, useContext, useState, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

export type AuthContextType = {
  user: User | undefined
  isAuthenticated: boolean
  saveSession: (session: User) => void
  removeSession: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuthContext() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }
  return context
}

const authSessionKey = '_MIZZLE_AUTH_KEY_'

export function AuthProvider({ children }: Readonly<{ children: ReactNode }>) {
  const navigate = useNavigate()

  const getSession = (): AuthContextType['user'] => {
    const fetchedCookie = getCookie(authSessionKey)?.toString()
    if (!fetchedCookie) return
    else return JSON.parse(fetchedCookie)
  }

  const [user, setUser] = useState<User | undefined>(getSession())

  const saveSession = (user: User) => {
    setCookie(authSessionKey, JSON.stringify(user))
    setUser(user)
  }

  const removeSession = () => {
    deleteCookie(authSessionKey)
    setUser(undefined)
    navigate('/auth/sign-in')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: hasCookie(authSessionKey),
        saveSession,
        removeSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
