import {AnyAction} from "redux"

export const isErrorRejected = (action: AnyAction) => action.type.endsWith("rejected")
