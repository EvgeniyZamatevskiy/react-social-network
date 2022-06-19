import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk, { ThunkAction } from 'redux-thunk'
import { authReducer } from './reducers'
import { appReducer } from './reducers/appReducer'
import { profileReducer } from './reducers/profileReducer'
import { usersReducer } from './reducers/usersReducer'

const rootReducer = combineReducers({
	profile: profileReducer,
	users: usersReducer,
	app: appReducer,
	auth: authReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

// types
export type RootReducerType = ReturnType<typeof rootReducer>
export type AllActionsType = Parameters<typeof rootReducer>[1]
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, RootReducerType, unknown, AllActionsType>