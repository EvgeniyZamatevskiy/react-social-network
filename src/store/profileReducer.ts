
const initialState: InitialStateType = {
	posts: [
		{
			id: 1,
			likes: 48,
			message: 'There are two ways of constructing a software design.One way is to make it so simple that there are obviously no deficiencies.And the other way is to make it so complicated that there are no obvious deficiencies..'
		}
	]
}

export const profileReducer = (state: InitialStateType = initialState, action: ProfileReducerActionsType): InitialStateType => {
	switch (action.type) {
		case 'profile/ADD-POST':
			const newPost = { id: Date.now(), likes: 0, message: action.message }
			return { ...state, posts: [newPost, ...state.posts] }
		case 'profile/REMOVE-POST':
			return { ...state, posts: state.posts.filter(post => post.id !== action.postId) }

		default:
			return state
	}
}

// actionsCreators
export const addPostAC = (message: string) => ({ type: 'profile/ADD-POST', message } as const)

export const removePostAC = (postId: number) => ({ type: 'profile/REMOVE-POST', postId } as const)

// types
export type InitialStateType = {
	posts: PostsType[]
}

export type PostsType = {
	id: number
	likes: number
	message: string
}

export type ProfileReducerActionsType =
	ReturnType<typeof addPostAC> |
	ReturnType<typeof removePostAC>
