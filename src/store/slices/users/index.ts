import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {UserType} from "api/users/types"
import {EMPTY_STRING} from "constants/base"
import {follow, getFollowedStatus, getUsers, logOut, unfollow} from "store/asyncActions"
import {FriendValuesType, UsersSliceInitialStateType} from "./types"

const initialState: UsersSliceInitialStateType = {
  users: [],
  totalUsersCount: 0,
  isLoadingUsers: false,
  term: EMPTY_STRING,
  isLoadingTerm: false,
  friend: "All",
  page: 1,
  pageCount: 10,
  isFollowed: false,
  isLoadingFollowed: false,
  isDisabledFollowed: false,
}

export const usersSlice = createSlice({
  initialState,
  name: "users",
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
      .addCase(follow.pending, (state, action) => {
        const user = state.users.find(user => user.id === action.meta.arg)

        if (user) {
          user.followedStatus.isDisabled = true
          user.followedStatus.isLoading = true
        }

        state.isLoadingFollowed = true
        state.isDisabledFollowed = true
      })
      .addCase(unfollow.pending, (state, action) => {
        const user = state.users.find(user => user.id === action.meta.arg)

        if (user) {
          user.followedStatus.isDisabled = true
          user.followedStatus.isLoading = true
        }

        state.isLoadingFollowed = true
        state.isDisabledFollowed = true
      })
      .addCase(getFollowedStatus.pending, (state, action) => {
        state.isLoadingFollowed = true
        state.isDisabledFollowed = true
      })
      .addCase(getFollowedStatus.fulfilled, (state, action: PayloadAction<{ followedStatus: boolean, userId: number }>) => {
        state.isFollowed = action.payload.followedStatus

        const user = state.users.find(user => user.id === action.payload.userId)

        if (user) {
          user.followed = action.payload.followedStatus
          user.followedStatus.isDisabled = false
          user.followedStatus.isLoading = false
        }

        state.isLoadingFollowed = false
        state.isDisabledFollowed = false
      })
      .addCase(logOut.fulfilled, (state) => {
        state.users = []
        state.totalUsersCount = 0
        state.term = EMPTY_STRING
        state.friend = "All"
        state.page = 1
        state.pageCount = 10
        state.isFollowed = false
      })
  },
})

export default usersSlice.reducer

export const {setTerm, setIsLoadingTerm, setFriend, setPage} = usersSlice.actions
