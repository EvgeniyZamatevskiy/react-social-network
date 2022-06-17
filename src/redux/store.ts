import { usersReducer } from './reducers/users-reducer/users-reducer'
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { DialogsReducerActionsType } from './reducers/dialogs-reducer/actions'
import { dialogsReducer } from './reducers/dialogs-reducer/dialogs-reducer'
import { ProfileReducerActionsType } from './reducers/profile-reducer/actions'
import { profileReducer } from './reducers/profile-reducer/profile-reducer'
import { UsersReducerActionsType } from './reducers/users-reducer/actions'
import { appReducer } from './reducers/app-reducer/app-reducer'
import { AppReducerActionsType } from './reducers/app-reducer/actions'
import { AuthReducerActionsType } from './reducers/auth-reducer/actions'
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
export type AllActionsType =
	DialogsReducerActionsType | ProfileReducerActionsType | UsersReducerActionsType |
	AppReducerActionsType | AuthReducerActionsType
export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, RootReducerType, unknown, AllActionsType>
export type DispatchType = ThunkDispatch<RootReducerType, unknown, AllActionsType>



export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never


//export type all = InferActionsTypes<typeof usersActions>