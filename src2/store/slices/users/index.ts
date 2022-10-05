import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserType } from 'api/users/types'
import { EMPTY_STRING } from 'constants/base'
import { follow, getFollowedStatus, getUsers, unfollow } from 'store/asyncActions'
import { FriendValuesType, UsersSliceInitialStateType } from './types'

const initialState: UsersSliceInitialStateType = {
  users: [],
  totalUsersCount: 0,
  isLoadingUsers: false,
  term: EMPTY_STRING,
  isLoadingTerm: false,
  friend: 'All',
  page: 1,
  pageCount: 10,
  isFollowed: false
}

export const usersSlice = createSlice({
  initialState,
  name: 'users',
  reducers: {
    setTerm(state, action: PayloadAction<string>) {
      state.term = action.payload
    },
    setIsLoadingTerm(state, action: PayloadAction<boolean>) {
      state.isLoadingTerm = action.payload
    },
    setFriend(state, action: PayloadAction<FriendValuesType>) {
      state.friend = action.payload
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoadingUsers = true
      })
      .addCase(getUsers.rejected, (state) => {
        state.isLoadingUsers = false
      })
      .addCase(getUsers.fulfilled, (state, action: PayloadAction<{ users: UserType[], totalCount: number }>) => {
        state.users = action.payload.users.map(user => ({
          ...user,
          followedStatus: {isDisabled: false, isLoading: false}
        }))
        state.totalUsersCount = action.payload.totalCount
        state.isLoadingUsers = false
        state.isLoadingTerm = false
      })
      // .addCase(follow.pending, (state, action) => {
      //   const user = state.users.find(user => user.id === action.meta.arg)
      //
      //   if (user) {
      //     user.followedStatus.isDisabled = true
      //     user.followedStatus.isLoading = true
      //   }
      // })
      // .addCase(follow.rejected, (state, action) => {
      //   const user = state.users.find(user => user.id === action.meta.arg)
      //
      //   if (user) {
      //     user.followedStatus.isDisabled = false
      //     user.followedStatus.isLoading = false
      //   }
      // })
      // .addCase(follow.fulfilled, (state, action: PayloadAction<number>) => {
      //   const user = state.users.find(user => user.id === action.payload)
      //
      //   if (user) {
      //     user.followed = true
      //     user.followedStatus.isDisabled = false
      //     user.followedStatus.isLoading = false
      //   }
      // })
      // .addCase(unfollow.pending, (state, action) => {
      //   const user = state.users.find(user => user.id === action.meta.arg)
      //
      //   if (user) {
      //     user.followedStatus.isDisabled = true
      //     user.followedStatus.isLoading = true
      //   }
      // })
      // .addCase(unfollow.rejected, (state, action) => {
      //   const user = state.users.find(user => user.id === action.meta.arg)
      //
      //   if (user) {
      //     user.followedStatus.isDisabled = false
      //     user.followedStatus.isLoading = false
      //   }
      // })
      // .addCase(unfollow.fulfilled, (state, action: PayloadAction<number>) => {
      //   const user = state.users.find(user => user.id === action.payload)
      //
      //   if (user) {
      //     user.followed = false
      //     user.followedStatus.isDisabled = false
      //     user.followedStatus.isLoading = false
      //   }
      // })
      .addCase(getFollowedStatus.fulfilled, (state, action: PayloadAction<{ followedStatus: boolean, userId: number }>) => {
        state.isFollowed = action.payload.followedStatus

        const user = state.users.find(user => user.id === action.payload.userId)

        if (user) {
          user.followed = action.payload.followedStatus
        }
      })
  },
})

export default usersSlice.reducer

export const {setTerm, setIsLoadingTerm, setFriend, setPage} = usersSlice.actions
