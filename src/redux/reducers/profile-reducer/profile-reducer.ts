import { UserProfileResponseType } from '../../../api/profileAPI'
import { ProfileReducerActionsType } from './actions'

const initState: InitStateType = {
	posts: [
		{ id: 1, message: 'Hi, how are you?', likesCount: 12 },
		{ id: 2, message: 'It\'s my first post', likesCount: 11 },
		{ id: 3, message: 'Hello', likesCount: 11 },
	],
	userProfile: null,
	userStatus: ''
}

export const profileReducer = (state: InitStateType = initState, action: ProfileReducerActionsType): InitStateType => {
	switch (action.type) {
		case 'ADD-POST':
			const newPost = { id: Date.now(), message: action.postTitle, likesCount: 0 }
			return { ...state, posts: [...state.posts, newPost] }
		case 'SET-USER-PROFILE':
			return { ...state, userProfile: action.userProfile }
		case 'SET-USER-STATUS':
			return { ...state, userStatus: action.status }
		case 'SAVE-PHOTO':
			return { ...state, userProfile: { ...state.userProfile, photos: action.photos } }

		default:
			return state
	}
}

// types
type InitStateType = {
	posts: PostsType[]
	userProfile: UserProfileResponseType | null
	userStatus: string
}

export type PostsType = {
	id: number
	message: string
	likesCount: number
}