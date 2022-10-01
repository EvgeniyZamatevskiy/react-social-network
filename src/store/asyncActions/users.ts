import { createAsyncThunk } from '@reduxjs/toolkit'
import { USERS } from 'api'
import { UserType } from 'api/users/types'
import { AxiosError } from 'axios'
import { FIRST_ELEMENT_ARRAY } from 'constants/base'
import { ResponseCode } from 'enums'
import { handleServerNetworkError } from 'utils'

export const getUsers = createAsyncThunk<{ users: UserType[], totalCount: number }, { term: string, friend: boolean | string }, { rejectValue: { error: string } }>
('users/getUsers', async (params, {rejectWithValue}) => {
  try {
    const response = await USERS.getUsers(params.term, params.friend)
    const {items: users, totalCount} = response.data

    return {users, totalCount}
  } catch (error) {
    return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
  }
})

export const follow = createAsyncThunk<number, number, { rejectValue: { error: string } }>
('users/follow', async (userId, {rejectWithValue}) => {
  try {
    const response = await USERS.follow(userId)
    const {messages, resultCode} = response.data

    if (resultCode === ResponseCode.SUCCESS) {
      return userId
    } else {
      return rejectWithValue({error: messages[FIRST_ELEMENT_ARRAY]})
    }
  } catch (error) {
    return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
  }
})

export const unfollow = createAsyncThunk<number, number, { rejectValue: { error: string } }>
('users/unfollow', async (userId, {rejectWithValue}) => {
  try {
    const response = await USERS.unfollow(userId)
    const {messages, resultCode} = response.data

    if (resultCode === ResponseCode.SUCCESS) {
      return userId
    } else {
      return rejectWithValue({error: messages[FIRST_ELEMENT_ARRAY]})
    }
  } catch (error) {
    return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
  }
})
