import { ProfileReducerActionsType } from './actions'

const initState: InitStateType = {
	posts: [
		{ id: 1, message: 'Hi, how are you?', likesCount: 12 },
		{ id: 2, message: 'It\'s my first post', likesCount: 11 },
		{ id: 3, message: 'Hello', likesCount: 11 },
	],
}

export const profileReducer = (state: InitStateType = initState, action: ProfileReducerActionsType): InitStateType => {
	switch (action.type) {
		case 'ADD-POST':
			const newPost = { id: Date.now(), message: action.postTitle, likesCount: 0 }
			return { ...state, posts: [...state.posts, newPost] }

		default:
			return state
	}
}

// types
type InitStateType = {
	posts: PostsType[]
}

export type PostsType = {
	id: number
	message: string
	likesCount: number
}