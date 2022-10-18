import {ReactNode} from "react"

export type ButtonPropsType = {
  isPrimary?: boolean
  isSecondary?: boolean
  className?: string
  onClick?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  style?: {}
  type?: "button" | "submit" | "reset"
  children: ReactNode
  disabled?: boolean
}
