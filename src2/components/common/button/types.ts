import { ReactNode } from 'react'

export type ButtonPropsType = {
  isDarkTheme?: boolean
  isPrimary?: boolean
  className?: string
  onClick?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  style?: {}
  children: ReactNode
}
