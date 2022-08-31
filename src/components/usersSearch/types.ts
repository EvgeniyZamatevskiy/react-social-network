import { FilterType } from 'store/slices/users/types'

export type UsersSearchPropsType = {
	handleFilterChangedClick: (filter: FilterType) => void
}
