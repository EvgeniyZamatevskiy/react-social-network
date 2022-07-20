import { useDispatch } from 'react-redux'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { RootStateType } from 'store'

export const useAppDispatch = () => useDispatch<DispatchType>()

export type DispatchType = ThunkDispatch<RootStateType, unknown, AnyAction>
