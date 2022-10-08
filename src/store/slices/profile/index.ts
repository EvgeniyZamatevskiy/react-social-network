import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserProfileType } from 'api/profile/types'
import { getStatus, getUserProfile, logOut, updatePhoto, updateUserProfile } from 'store/asyncActions'
import { ProfileSliceInitialStateType } from './types'
import { EMPTY_STRING } from 'constants/base'
import { PhotoType } from 'api/types'

const initialState: ProfileSliceInitialStateType = {
  userProfile: null,
  status: EMPTY_STRING,
  posts: [
    {
      id: 1,
      like: 65,
      message: 'There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies.',
      isAuthorizedUserLiked: false,
      time: '18:00:00'
    }
  ],
  remotePosts: []
}

export const profileSlice = createSlice({
  initialState,
  name: 'profile',
  reducers: {
    addPost(state, action: PayloadAction<{ message: string, time: string }>) {
      const post = {
        id: Date.now(),
        like: 0,
        message: action.payload.message,
        time: action.payload.time,
        isAuthorizedUserLiked: false
      }
      state.posts.push(post)
    },
    addLike(state, action: PayloadAction<number>) {
      const post = state.posts.find(post => post.id === action.payload)

      if (post) {
        if (!post.isAuthorizedUserLiked) {
          post.like = post.like + 1
          post.isAuthorizedUserLiked = true
        } else {
          post.like = post.like - 1
          post.isAuthorizedUserLiked = false
        }
      }
    },
    removePost(state, action: PayloadAction<number>) {
      const index = state.posts.findIndex((arrow) => arrow.id === action.payload)
      if (index > -1) {
        const remotePost = state.posts.splice(index, 1)
        // state.remotePosts = [...state.remotePosts, ...remotePost]
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUserProfile.fulfilled, (state, action: PayloadAction<UserProfileType>) => {
        state.userProfile = action.payload
      })
      .addCase(getStatus.fulfilled, (state, action: PayloadAction<string>) => {
        state.status = action.payload
      })
      .addCase(updatePhoto.fulfilled, (state, action: PayloadAction<{ photos: PhotoType }>) => {
        if (state.userProfile) {
          state.userProfile.photos = {...action.payload.photos}
        }
      })
      .addCase(updateUserProfile.fulfilled, (state, action: PayloadAction<UserProfileType>) => {
        state.userProfile = action.payload
      })
      .addCase(logOut.fulfilled, (state) => {
        state.userProfile = null
        state.status = EMPTY_STRING
      })
  },
})

export default profileSlice.reducer

export const {addPost, addLike, removePost} = profileSlice.actions
