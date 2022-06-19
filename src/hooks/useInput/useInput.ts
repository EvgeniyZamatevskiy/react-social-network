import { EMPTY_STRING } from '../../constants'
import { useState, useCallback, useMemo } from 'react'
import { useInputReturnType } from './types'

export const useInput = (): useInputReturnType => {

	const [inputValue, setInputValue] = useState(EMPTY_STRING)

	const handleInputValueChange = useCallback((newValue: string) => {
		setInputValue(newValue)
	}, [])

	return useMemo(() => {
		return { inputValue, handleInputValueChange }
	}, [inputValue, handleInputValueChange])
}
