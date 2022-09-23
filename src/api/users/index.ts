import { instance } from 'api/config'

export const USERS = {
	getUsers() {
		return instance.get<any>('users')
	}
}
