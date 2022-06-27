import { FilterType } from 'store/reducers/users/types'

export type UsersSearchPropsType = {
	handleFilterChangedClick: (filter: FilterType) => void
}
