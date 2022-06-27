import { setErrorAC, setIsLoadingAC } from 'store/actions/app'
import { Nullable } from 'types'

export type InitialStateType = {
	error: Nullable<string>
	isLoading: boolean
}

export type AppReducerActionsType = ReturnType<typeof setErrorAC> | ReturnType<typeof setIsLoadingAC>
