export type PaginationPropsType = {
	setCurrentPage: (currentPage: number) => void
	totalItemsCount: number
	count: number
	page: number
	portionSize?: number
}