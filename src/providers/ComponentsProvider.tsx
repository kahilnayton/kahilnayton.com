import type { LoggerProviderProps } from './LoggerProvider'
import { LoggerProvider } from './LoggerProvider'

type ComponentsProviderProps = LoggerProviderProps

export const ComponentsProvider = ({
  children,
  logger,
}: ComponentsProviderProps) => (
  <LoggerProvider logger={logger}>{children}</LoggerProvider>
)
