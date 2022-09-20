export type EyePropsType = {
	inputType: InputType
	setInputType: (inputType: InputType) => void
	errorPasswordMessage: string | undefined
}

export type InputType = 'password' | 'text'
