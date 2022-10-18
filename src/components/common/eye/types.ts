export type EyePropsType = {
  type: InputType
  setType: (type: InputType) => void
  errorPasswordMessage: string | undefined
}

export type InputType = "password" | "text"
