import { createAsyncThunk } from '@reduxjs/toolkit'
import { USERS } from 'api'
import { UserType } from 'api/users/types'
import { AxiosError } from 'axios'
import { FIRST_ELEMENTS_INDEX } from 'constants/base'
import { ResponseCode } from 'enums'
import { handleServerNetworkError } from 'utils'
import { FriendValuesType } from '../slices/users/types'

export const getUsers = createAsyncThunk<{ users: UserType[], totalCount: number }, { term: string, friend: FriendValuesType, page: number, pageCount: number }, { rejectValue: { error: string } }>
('users/getUsers', async (params, {rejectWithValue}) => {
  try {
    const response = await USERS.getUsers(params.term, params.friend, params.page, params.pageCount)
    const {items: users, totalCount} = response.data

    return {users, totalCount}
  } catch (error) {
    return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
  }
})

export const follow = createAsyncThunk<number, number, { rejectValue: { error: string } }>
('users/follow', async (userId, {rejectWithValue, dispatch}) => {
  try {
    const response = await USERS.follow(userId)
    const {messages, resultCode} = response.data

    if (resultCode === ResponseCode.SUCCESS) {
      dispatch(getFollowedStatus(userId))
      return userId
    } else {
      return rejectWithValue({error: messages[FIRST_ELEMENTS_INDEX]})
    }
  } catch (error) {
    return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
  }
})

export const unfollow = createAsyncThunk<number, number, { rejectValue: { error: string } }>
('users/unfollow', async (userId, {rejectWithValue, dispatch}) => {
  try {
    const response = await USERS.unfollow(userId)
    const {messages, resultCode} = response.data

    if (resultCode === ResponseCode.SUCCESS) {
      dispatch(getFollowedStatus(userId))
      return userId
    } else {
      return rejectWithValue({error: messages[FIRST_ELEMENTS_INDEX]})
    }
  } catch (error) {
    return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
  }
})

export const getFollowedStatus = createAsyncThunk<{ followedStatus: boolean, userId: number }, number, { rejectValue: { error: string } }>
('users/getFollowedStatus', async (userId, {rejectWithValue}) => {
  try {
    const {data: followedStatus} = await USERS.getFollowedStatus(userId)

    return {followedStatus, userId}
  } catch (error) {
    return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
  }
})
