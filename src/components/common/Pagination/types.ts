export type PaginationPropsType = {
	totalItemsCount: number,
	count: number
	currentPage: number
	handleSetCurrentPageClick: (currentPage: number) => void
	portionSize?: number
}
