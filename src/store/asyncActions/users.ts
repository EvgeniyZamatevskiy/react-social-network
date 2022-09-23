import { createAsyncThunk } from '@reduxjs/toolkit'
import { USERS } from 'api'
import { AxiosError } from 'axios'
import { FIRST_ELEMENT_ARRAY } from 'constants/base'
import { ResponseCode } from 'enums'
import { handleServerNetworkError } from 'utils'

export const getUsers = createAsyncThunk
	<
		void,
		undefined,
		{ rejectValue: { error: string } }
	>
	('users/getUsers', async (_, { rejectWithValue }) => {
		try {
			const response = await USERS.getUsers()

			console.log(response)
		} catch (error) {
			return handleServerNetworkError(error as AxiosError | Error, rejectWithValue)
		}
	})
