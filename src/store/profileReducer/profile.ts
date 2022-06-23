import { InitialStateType, ProfileReducerActionsType } from "./types/profile"

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