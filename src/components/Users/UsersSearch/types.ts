import { FilterType } from 'store/usersReducer'

export type UsersSearchPropsType = {
	onFilterChangedSubmit: (filter: FilterType) => void
}

export type FormType = {
	term: string,
	friend: 'true' | 'false' | 'null'
}
