import { ChangeEvent, ReactNode } from 'react'

export type CheckboxPropsType = {
  isPrimary?: boolean
  isSecondary?: boolean
  className?: string
  labelClassName?: string
  spanClassName?: string
  children: ReactNode
  checked?: boolean
  setValue?: (checked: boolean) => void
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}
