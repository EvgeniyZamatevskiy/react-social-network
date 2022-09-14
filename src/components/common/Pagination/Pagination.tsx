import React, { FC, memo, useEffect, useState } from 'react'
import { EMPTY_STRING } from 'constants/base'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { PaginationPropsType } from './types'
import style from './Pagination.module.scss'

export const Pagination: FC<PaginationPropsType> =
	memo(({ totalItemsCount, count, currentPage, handleSetCurrentPageClick, portionSize = 9 }): ReturnComponentType => {

		const [portionNumber, setPortionNumber] = useState(1)

		const pagesCount = Math.ceil(totalItemsCount / count)
		const pages: number[] = []

		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i)
		}

		const portionCount = Math.ceil(pagesCount / portionSize)
		const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
		const rightPortionPageNumber = portionNumber * portionSize
		const pagesFiltered = pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
		const pagesRender = pagesFiltered.map(page => {

			const onSetCurrentPageClick = (): void => handleSetCurrentPageClick(page)

			return (
				<button
					key={page}
					className={currentPage === page ? style.active : EMPTY_STRING}
					onClick={onSetCurrentPageClick}
				>
					{page}
				</button>
			)
		})

		useEffect(() => {
			setPortionNumber(Math.ceil(currentPage / portionSize))
		}, [currentPage])

		const onDecreasePortionNumberClick = (): void => setPortionNumber(portionNumber - 1)

		const onIncreasePortionNumberClick = (): void => setPortionNumber(portionNumber + 1)

		return (
			<div className={style.pagination}>
				{portionNumber > 1 && <button onClick={onDecreasePortionNumberClick}>&laquo;</button>}
				{pagesRender}
				{portionCount > portionNumber && <button onClick={onIncreasePortionNumberClick}>&raquo;</button>}
			</div>
		)
	})
