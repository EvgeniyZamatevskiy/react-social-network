import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserProfileType } from 'api/profile/types'
import { PhotosType } from 'api/types'
import { EMPTY_STRING } from 'constants/base'
import { getUserProfile, getUserStatus, logOut, updateUserPhoto, updateUserProfile, updateUserStatus } from 'store/asyncActions'
import { Nullable } from 'types'
import { ProfileSliceInitialStateType } from './types'

const initialState: ProfileSliceInitialStateType = {
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

const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		addPost(state, action: PayloadAction<string>) {
			const newPost = { id: Date.now(), like: 0, message: action.payload }
			state.posts.unshift(newPost)
		},
		removePost(state, action: PayloadAction<number>) {
			state.posts = state.posts.filter(post => post.id !== action.payload)
		}
	},
	extraReducers(builder) {
		builder
			.addCase(getUserProfile.fulfilled, (state, action: PayloadAction<Nullable<UserProfileType>>) => {
				state.userProfile = action.payload
			})
			.addCase(getUserStatus.fulfilled, (state, action: PayloadAction<string>) => {
				state.userStatus = action.payload
			})
			.addCase(updateUserStatus.fulfilled, (state, action: PayloadAction<string>) => {
				state.userStatus = action.payload
			})
			.addCase(updateUserPhoto.fulfilled, (state, action: PayloadAction<PhotosType>) => {
				if (state.userProfile) {
					state.userProfile.photos = action.payload
				}
			})
			.addCase(updateUserProfile.fulfilled, (state, action: PayloadAction<UserProfileType>) => {
				state.userProfile = action.payload
			})
			.addCase(logOut.fulfilled, (state) => {
				state.posts = []
				state.userStatus = EMPTY_STRING
				state.userProfile = null
			})
	},
})

export const { addPost, removePost } = profileSlice.actions

export default profileSlice.reducer
