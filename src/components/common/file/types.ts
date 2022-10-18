import {ReactNode} from "react"

export type FilePropsType = {
  buttonClass?: string
  children: ReactNode
  handleUpdatePhotoChange: (file: File) => void
  handleSetErrorMessage: (errorMessage: string) => void
}
