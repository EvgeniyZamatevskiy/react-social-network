import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {UserProfileType} from "api/profile/types"
import {
  getStatus,
  getUserProfile,
  logOut,
  updatePhoto,
  updateUserProfile
} from "store/asyncActions"
import {PostType, ProfileSliceInitialStateType} from "./types"
import {EMPTY_STRING} from "constants/base"
import {PhotoType} from "api/types"
import {LocalStorageKey} from "enums"
import {getParseLocalStorageData} from "services"

const initialState: ProfileSliceInitialStateType = {
  userProfile: null,
  status: EMPTY_STRING,
  posts: getParseLocalStorageData<PostType[]>(LocalStorageKey.POSTS, []),
  searchPostsMessage: EMPTY_STRING,
  isLoadingUserProfile: false
}

export const profileSlice = createSlice({
  initialState,
  name: "profile",
  reducers: {
    addPost(state, action: PayloadAction<{ message: string; time: string }>) {
      const post = {
        id: Date.now(),
        like: 0,
        message: action.payload.message,
        time: action.payload.time,
        isAuthorizedUserLiked: false
      }
      state.posts.unshift(post)
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
      const index = state.posts.findIndex(arrow => arrow.id === action.payload)
      if (index > -1) {
        state.posts.splice(index, 1)
      }
    },
    setSearchPostsMessage(state, action: PayloadAction<string>) {
      state.searchPostsMessage = action.payload
    },
    setEditMessage(state, action: PayloadAction<{ id: number, message: string }>) {
      const post = state.posts.find(post => post.id === action.payload.id)

      if (post) {
        post.message = action.payload.message
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getUserProfile.pending, (state) => {
        state.isLoadingUserProfile = true
      })
      .addCase(getUserProfile.fulfilled, (state, action: PayloadAction<UserProfileType>) => {
        state.userProfile = action.payload
        state.isLoadingUserProfile = false
      })
      .addCase(getUserProfile.rejected, (state) => {
        state.isLoadingUserProfile = false
      })
      .addCase(getStatus.fulfilled, (state, action: PayloadAction<string>) => {
        state.status = action.payload
      })
      .addCase(
        updatePhoto.fulfilled,
        (state, action: PayloadAction<{ photos: PhotoType }>) => {
          if (state.userProfile) {
            state.userProfile.photos = {...action.payload.photos}
          }
        }
      )
      .addCase(
        updateUserProfile.fulfilled,
        (state, action: PayloadAction<UserProfileType>) => {
          state.userProfile = action.payload
        }
      )
      .addCase(logOut.fulfilled, state => {
        state.userProfile = null
        state.status = EMPTY_STRING
      })
  }
})

export default profileSlice.reducer

export const {addPost, addLike, removePost, setSearchPostsMessage, setEditMessage} = profileSlice.actions
