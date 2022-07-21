import { getCaptchaUrl, getUserData, login, logOut } from 'store/asyncActions'
import { AuthSliceInitialStateType } from 'store/slices/auth/types'
import authSlice from 'store/slices/auth'

let startState: AuthSliceInitialStateType

beforeEach(() => {
	startState = {
		userData: { email: '', id: 1, login: '' },
		isInitializedApp: false,
		isAuth: false,
		captchaUrl: '',
	}
})

test('get and set user data', () => {

	const userData = { id: 32, email: 'test@gmail.com', login: 'testLogin' }

	const action = getUserData.fulfilled(userData, 'requestId', undefined)

	const endState = authSlice(startState, action)

	expect(endState.userData).toBe(userData)
})

test('get and set url captcha', () => {

	const url = 'https://www.test.ru'

	const action = getCaptchaUrl.fulfilled(url, 'requestId', undefined)

	const endState = authSlice(startState, action)

	expect(endState.captchaUrl).toBe(url)
})

test('change authorization status and reset user data', () => {

	const action = logOut.fulfilled(undefined, 'requestId', undefined)

	const endState = authSlice(startState, action)

	expect(endState.isAuth).toBe(false)
	expect(endState.userData).toBe(null)
})

test('url captcha should reset', () => {

	const loginParams = { email: '', password: '', rememberMe: true, captcha: '' }

	const action = login.fulfilled(undefined, 'requestId', loginParams)

	const endState = authSlice(startState, action)

	expect(endState.captchaUrl).toBe(null)
})