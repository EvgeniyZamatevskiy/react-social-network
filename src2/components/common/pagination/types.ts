export type PaginationPropsType = {
  totalItemsCount: number,
  pageCount: number
  page: number
  handleSetPageClick: (page: number) => void
  isDarkTheme: boolean
  portionSize?: number
}
