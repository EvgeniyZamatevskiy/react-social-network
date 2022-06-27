import { UserProfileType } from 'api/profile/types'
import { EMPTY_STRING } from 'constants/base'
import { InitialStateType, ProfileReducerActionsType } from './types'

const initialState: InitialStateType = {
	posts: [
		{
			id: 1,
			like: 48,
			message: 'There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies.'
		}
	],
	userProfile: null,
	userStatus: EMPTY_STRING
}

export const profileReducer = (state: InitialStateType = initialState, action: ProfileReducerActionsType): InitialStateType => {
	switch (action.type) {
		case 'profile/ADD-POST':
			const newPost = { id: Date.now(), like: 0, message: action.message }
			return { ...state, posts: [newPost, ...state.posts] }
		case 'profile/REMOVE-POST':
			return { ...state, posts: state.posts.filter(post => post.id !== action.postId) }
		case 'profile/SET-USER-PROFILE':
			return { ...state, userProfile: action.userProfile }
		case 'profile/SET-USER-STATUS':
			return { ...state, userStatus: action.userStatus }
		case 'profile/UPDATE-USER-PHOTO':
			return { ...state, userProfile: { ...state.userProfile, photos: action.photos } as UserProfileType }
		case 'profile/UPDATE-USER-PROFILE':
			return { ...state, userProfile: action.updatedUserProfile }

		default:
			return state
	}
}
