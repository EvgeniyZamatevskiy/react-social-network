const initialState: InitialStateType = {

}

export const usersReducer = (state: InitialStateType = initialState, action: UsersReducerActionsType): InitialStateType => {
	switch (action.type) {

		default:
			return state
	}
}

// actionsCreators
export const AC = () => ({ type: 'users/' } as const)


// types
export type InitialStateType = {

}

export type UsersReducerActionsType =
	any
