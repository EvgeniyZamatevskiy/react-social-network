import { UserProfileResponseType } from 'api/profile/types'
import { ProfileReducerActionsType } from 'store/actions/profile'

const initState = {
	posts: [
		{ id: 1, message: 'Hi, how are you?', likesCount: 12 },
		{ id: 2, message: 'It\'s my first post', likesCount: 11 },
		{ id: 3, message: 'Hello', likesCount: 11 },
	] as PostsType[],
	userProfile: null as UserProfileResponseType | null,
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
			return { ...state, userProfile: { ...state.userProfile, photos: action.photos } as UserProfileResponseType }

		default:
			return state
	}
}

// types
export type InitStateType = typeof initState

export type PostsType = {
	id: number
	message: string
	likesCount: number
}