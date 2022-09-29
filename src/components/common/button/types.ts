import { ReactNode } from 'react'

export type ButtonPropsType = {
  children: ReactNode
  className?: string
  style?: {}
  onClick?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}
