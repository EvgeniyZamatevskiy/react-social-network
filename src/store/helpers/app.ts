import { AnyAction } from 'redux'

export const isErrorRejected = (action: AnyAction) => action.type.endsWith('rejected')

export const isLoadingPending = (action: AnyAction) => action.type.endsWith('pending')

export const isLoadingFulfilled = (action: AnyAction) => action.type.endsWith('fulfilled')

export const isLoadingRejected = (action: AnyAction) => action.type.endsWith('rejected')
