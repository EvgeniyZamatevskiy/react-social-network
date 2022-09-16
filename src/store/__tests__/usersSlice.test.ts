import { follow, getUsers, logOut, unfollow } from 'store/asyncActions'
import usersSlice, { setIsDisabled } from 'store/slices/users'
import { UsersSliceInitialStateType } from 'store/slices/users/types'

let startState: UsersSliceInitialStateType

beforeEach(() => {
  startState = {
    users: [
      {
        followed: false, id: 1, name: 'Maria', status: 'Never look back', uniqueUrlName: '', isDisabled: false,
        photos: { small: 'http', large: 'https' }
      },
      {
        followed: true, id: 2, name: 'Evgeniy', status: 'Never look back', uniqueUrlName: '', isDisabled: true,
        photos: { small: 'https', large: 'http' }
      },
    ],
    count: 9,
    page: 1,
    totalCount: 10000,
    filter: { term: 'a', friend: true }
  }
})

test('property isDisabled should correctly change value', () => {

  const action = setIsDisabled({ id: 2, isDisabled: false })

  const endState = usersSlice(startState, action)

  expect(endState.users[0].isDisabled).toBe(false)
  expect(endState.users[1].isDisabled).toBe(false)
})

test('get and set user data', () => {

  const startState = {
    users: [],
    count: 0,
    page: 0,
    totalCount: 0,
    filter: { term: '', friend: null }
  }

  const usersData = {
    users: [
      {
        followed: true, id: 2, name: 'Mihail', status: 'test', uniqueUrlName: '',
        photos: { small: 'http', large: 'https' }
      },
      {
        followed: true, id: 3, name: 'Liza', status: 'test2', uniqueUrlName: '',
        photos: { small: 'http', large: 'https' },
      }
    ],
    totalCount: 10003,
    page: 2,
    filter: { term: '', friend: null }
  }

  const params = { count: 9, page: 1, filter: { term: '', friend: null } }

  const action = getUsers.fulfilled(usersData, 'requestId', params)

  const endState = usersSlice(startState, action)

  expect(endState.users.length).toBe(2)
  expect(endState.users[0].name).toBe('Mihail')
  expect(endState.users[1].name).toBe('Liza')
  expect(endState.totalCount).toBe(10003)
  expect(endState.page).toBe(2)
  expect(endState.filter.friend).toBe(null)
  expect(endState.filter.term).toBe('')
})

test('property followed should correctly change value', () => {

  const userId = 1

  const action = follow.fulfilled(userId, 'requestId', userId)

  const endState = usersSlice(startState, action)

  expect(endState.users[0].followed).toBe(true)
  expect(endState.users[1].followed).toBe(true)
})

test('property followed should correctly change value', () => {

  const userId = 2

  const action = unfollow.fulfilled(userId, 'requestId', userId)

  const endState = usersSlice(startState, action)

  expect(endState.users[0].followed).toBe(false)
  expect(endState.users[1].followed).toBe(false)
})

test('all user data must be reset', () => {

  const action = logOut.fulfilled(undefined, 'requestId', undefined)

  const endState = usersSlice(startState, action)

  expect(endState.users.length).toBe(0)
  expect(endState.totalCount).toBe(0)
  expect(endState.page).toBe(1)
  expect(endState.filter.friend).toBe(null)
  expect(endState.filter.term).toBe('')
})
