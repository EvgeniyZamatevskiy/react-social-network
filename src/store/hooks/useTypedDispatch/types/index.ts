import { ThunkDispatch } from "redux-thunk";
import { AllActionsType, RootReducerType } from "store/store";

export type DispatchType = ThunkDispatch<RootReducerType, unknown, AllActionsType>