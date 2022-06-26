import React, { FC, memo, useEffect, useState } from 'react'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { PaginationPropsType } from './types'
import style from './Pagination.module.scss'

export const Pagination: FC<PaginationPropsType> =
	memo(({ totalItemsCount, count, currentPage, setCurrentPage, portionSize = 9 }): ReturnComponentType => {

		const [portionNumber, setPortionNumber] = useState<number>(1)

		const pagesCount = Math.ceil(totalItemsCount / count)
		const pages = []

		for (let i = 1; i < pagesCount; i++) {
			pages.push(i)
		}

		const portionCount = Math.ceil(pagesCount / portionSize)
		const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
		const rightPortionPageNumber = portionNumber * portionSize

		const onDecreasePortionNumberClick = (): void => {
			setPortionNumber(portionNumber - 1)
		}

		const onIncreasePortionNumberClick = (): void => {
			setPortionNumber(portionNumber + 1)
		}

		useEffect(() => {
			setPortionNumber(Math.ceil(currentPage / portionSize))
		}, [currentPage])

		return (
			<div className={style.pagination}>

				{portionNumber > 1 && <button onClick={onDecreasePortionNumberClick}>&laquo;</button>}

				{pages
					.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
					.map(page => {

						const onSetCurrentPageClick = (): void => {
							setCurrentPage(page)
						}

						return (
							<button className={currentPage === page ? style.active : ''} key={page} onClick={onSetCurrentPageClick}>{page}</button>
						)
					})}

				{portionCount > portionNumber && <button onClick={onIncreasePortionNumberClick}>&raquo;</button>}
			</div>
		)
	})
