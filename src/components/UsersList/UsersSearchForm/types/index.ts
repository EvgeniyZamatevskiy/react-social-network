export type UsersSearchFormPropsType = {
	onFilterChanged: (filter: any) => void
}

export type FormType = {
	term: string,
	friend: 'true' | 'false' | 'null' | boolean | null
}