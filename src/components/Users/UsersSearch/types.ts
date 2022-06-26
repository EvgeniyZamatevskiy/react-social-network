import { FilterType } from 'store/usersReducer'

export type UsersSearchPropsType = {
	handleFilterChangedClick: (filter: FilterType) => void
}
