import type { ReactNode } from 'react'
import { createContext, useContext } from 'react'

type LoggerContextData = {
  notifyError: (err: string | Error) => void
  error: (err: string | Error) => void
  warn: (err: string | Error) => void
}

const defaultProps = {
  notifyError: console.error,
  error: console.error,
  warn: console.warn,
}

const LoggerContext = createContext<LoggerContextData>(defaultProps)

export type LoggerProviderProps = {
  children: ReactNode
  logger?: Partial<LoggerContextData>
}

export const LoggerProvider = ({ children, logger }: LoggerProviderProps) => (
  <LoggerContext.Provider
    value={{
      notifyError: logger?.notifyError || defaultProps.notifyError,
      error: logger?.error || defaultProps.error,
      warn: logger?.warn || defaultProps.warn,
    }}
  >
    {children}
  </LoggerContext.Provider>
)

export const useLogger = () => {
  return useContext(LoggerContext)
}
