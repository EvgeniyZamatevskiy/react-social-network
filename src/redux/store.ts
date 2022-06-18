import { usersReducer } from './reducers/users-reducer/users-reducer'
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { dialogsReducer } from './reducers/dialogs-reducer/dialogs-reducer'
import { profileReducer } from './reducers/profile-reducer/profile-reducer'
import { appReducer } from './reducers/app-reducer/app-reducer'
import { authReducer } from './reducers/auth-reducer/auth-reducer'

const rootReducer = combineReducers({
	dialogs: dialogsReducer,
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
export type DispatchType = ThunkDispatch<RootReducerType, unknown, AllActionsType>