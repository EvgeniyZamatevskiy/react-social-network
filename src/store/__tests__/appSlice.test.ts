import { AppSliceInitialStateType } from 'store/slices/app/types'
import appSlice, { setErrorMessage } from 'store/slices/app'

let startState: AppSliceInitialStateType

beforeEach(() => {
	startState = {
		errorMessage: '',
		isLoading: false
	}
})

test('correct error message should be set', () => {
	const errorMessage = 'some error occurred'

	const action = setErrorMessage(errorMessage)

	const endState = appSlice(startState, action)

	expect(endState.errorMessage).toBe(errorMessage)
})