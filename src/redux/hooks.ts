import { useMemo } from 'react'
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { ActionCreatorsMapObject, bindActionCreators } from 'redux'
import { RootReducerType, DispatchType } from './store'

export const useTypedSelector: TypedUseSelectorHook<RootReducerType> = useSelector

export const useTypedDispatch = () => useDispatch<DispatchType>()

export const useActions = <T extends ActionCreatorsMapObject<any>>(actions: T) => {
	const dispatch = useTypedDispatch()

	const boundActions = useMemo(() => {
		return bindActionCreators(actions, dispatch)
	}, [])

	return boundActions
}