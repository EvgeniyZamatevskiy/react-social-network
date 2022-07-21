import { ProfileSliceInitialStateType } from 'store/slices/profile/types'
import profileSlice, { addPost, removePost } from 'store/slices/profile'
import { getUserProfile, getUserStatus, logOut, updateUserPhoto, updateUserProfile, updateUserStatus } from 'store/asyncActions'

let startState: ProfileSliceInitialStateType

beforeEach(() => {
	startState = {
		posts: [
			{ id: 1, like: 48, message: 'test' },
			{ id: 2, like: 0, message: 'test2' },
		],
		userProfile: {
			aboutMe: '',
			contacts: {
				facebook: '',
				github: '',
				instagram: '',
				mainLink: '',
				twitter: '',
				vk: '',
				website: '',
				youtube: '',
			},
			fullName: '',
			lookingForAJob: true,
			lookingForAJobDescription: '',
			userId: 1,
			photos: { large: '', small: '', }
		},
		userStatus: ''
	}
})

test('new post to be added', () => {

	const message = 'newPost'

	const action = addPost(message)

	const endState = profileSlice(startState, action)

	expect(endState.posts[0].message).toBe(message)
	expect(endState.posts[0].like).toBe(0)
})


test('post should be deleted', () => {

	const id = 2

	const action = removePost(id)

	const endState = profileSlice(startState, action)

	expect(endState.posts.length).toBe(1)
	expect(endState.posts[0]).toStrictEqual({ id: 1, like: 48, message: 'test' })
})

test('get and set user profile', () => {

	const userProfile = {
		aboutMe: 'test',
		contacts: {
			facebook: 'test',
			github: 'test',
			instagram: 'test',
			mainLink: 'test',
			twitter: 'test',
			vk: 'test',
			website: 'test',
			youtube: 'test',
		},
		fullName: 'test',
		lookingForAJob: true,
		lookingForAJobDescription: 'test',
		userId: 123,
		photos: { large: 'test', small: 'test', }
	}

	const userId = 19283

	const action = getUserProfile.fulfilled(userProfile, 'requestId', userId)

	const endState = profileSlice(startState, action)

	expect(endState.userProfile).toBe(userProfile)
})

test('get and set current user status', () => {

	const currentStatus = 'status'

	const userId = 19283

	const action = getUserStatus.fulfilled(currentStatus, 'requestId', userId)

	const endState = profileSlice(startState, action)

	expect(endState.userStatus).toBe(currentStatus)
})

test('update user status', () => {

	const updatedStatus = 'newStatus'

	const action = updateUserStatus.fulfilled(updatedStatus, 'requestId', updatedStatus)

	const endState = profileSlice(startState, action)

	expect(endState.userStatus).toBe(updatedStatus)
})

test('update user photo', () => {

	const photos = { large: 'urlLarge', small: 'urlSmall' }

	const image = { type: 'image/png' }

	const action = updateUserPhoto.fulfilled(photos, 'requestId', image as File)

	const endState = profileSlice(startState, action)

	expect(endState.userProfile?.photos).toBe(photos)
})

test('update user profile', () => {

	const updatedUserProfile = {
		aboutMe: 'testUpdate',
		contacts: {
			facebook: 'testUpdate',
			github: 'testUpdate',
			instagram: 'testUpdate',
			mainLink: 'testUpdate',
			twitter: 'testUpdate',
			vk: 'testUpdate',
			website: 'testUpdate',
			youtube: 'testUpdate',
		},
		fullName: 'testUpdate',
		lookingForAJob: true,
		lookingForAJobDescription: 'testUpdate',
		userId: 123,
		photos: { large: 'testUpdate', small: 'testUpdate', }
	}


	const action = updateUserProfile.fulfilled(updatedUserProfile, 'requestId', updatedUserProfile)

	const endState = profileSlice(startState, action)

	expect(endState.userProfile).toBe(updatedUserProfile)
})

test('reset the list of posts, profile and user status', () => {

	const action = logOut.fulfilled(undefined, 'requestId', undefined)

	const endState = profileSlice(startState, action)

	expect(endState.posts).toEqual([])
	expect(endState.userProfile).toBe(null)
	expect(endState.userStatus).toBe('')
})
