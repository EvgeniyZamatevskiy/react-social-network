import React, { FC, memo, useEffect, useState } from 'react'
import { EMPTY_STRING } from 'constants/base'
import { ReturnComponentType } from 'types/ReturnComponentType'
import style from './Pagination.module.scss'

type PaginationPropsType = {
	totalItemsCount: number,
	count: number
	currentPage: number
	handleSetCurrentPageClick: (currentPage: number) => void
	portionSize?: number
}

export const Pagination: FC<PaginationPropsType> =
	memo(({ totalItemsCount, count, currentPage, handleSetCurrentPageClick, portionSize = 9 }): ReturnComponentType => {

		const [portionNumber, setPortionNumber] = useState<number>(1)

		const pagesCount = Math.ceil(totalItemsCount / count)
		const pages = []
		const portionCount = Math.ceil(pagesCount / portionSize)
		const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
		const rightPortionPageNumber = portionNumber * portionSize

		for (let i = 1; i < pagesCount; i++) {
			pages.push(i)
		}

		useEffect(() => {
			setPortionNumber(Math.ceil(currentPage / portionSize))
		}, [currentPage])

		const onDecreasePortionNumberClick = (): void => setPortionNumber(portionNumber - 1)

		const onIncreasePortionNumberClick = (): void => setPortionNumber(portionNumber + 1)

		return (
			<div className={style.pagination}>

				{portionNumber > 1 && <button onClick={onDecreasePortionNumberClick}>&laquo;</button>}

				{pages
					.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
					.map(page => {

						const onSetCurrentPageClick = (): void => handleSetCurrentPageClick(page)

						return (
							<button
								key={page}
								className={currentPage === page ? style.active : EMPTY_STRING}
								onClick={onSetCurrentPageClick}>
								{page}
							</button>
						)
					})}

				{portionCount > portionNumber && <button onClick={onIncreasePortionNumberClick}>&raquo;</button>}
			</div>
		)
	})
