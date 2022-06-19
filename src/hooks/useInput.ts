import { EMPTY_STRING } from '../constants'
import { useState, ChangeEvent } from 'react'

export const useInput = () => {

	const [value, setValue] = useState(EMPTY_STRING)

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.currentTarget.value)
	}

	return { value, onInputChange }
}