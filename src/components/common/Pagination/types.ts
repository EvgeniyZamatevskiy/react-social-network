export type PaginationPropsType = {
	totalItemsCount: number,
	count: number
	currentPage: number
	setCurrentPage: (currentPage: number) => void
	portionSize?: number
}
