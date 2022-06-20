import React, { FC, useEffect, useState } from 'react'
import { UniversalButton } from '../UniversalButton/UniversalButton'
import { ReturnComponentType } from 'types'
import { PaginationPropsType } from './types'
import style from './style/Pagination.module.css'

export const Pagination: FC<PaginationPropsType> = ({ setCurrentPage, totalItemsCount, count, page, portionSize = 10 }): ReturnComponentType => {

	const [portionNumber, setPortionNumber] = useState(1)

	const pages = []
	const pagesCount = Math.ceil(totalItemsCount / count)

	for (let i = 1; i < pagesCount; i++) {
		pages.push(i)
	}

	const portionCount = Math.ceil(pagesCount / portionSize)
	const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
	const rightPortionPageNumber = portionNumber * portionSize

	useEffect(() => {
		setPortionNumber(Math.ceil(page / portionSize))
	}, [page])

	return (
		<div className={style.paginator}>

			{portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}

			{pages
				.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
				.map(p => {

					const onSetCurrentPageClick = () => {
						setCurrentPage(p)
					}

					return (
						<UniversalButton key={p} className={page === p ? style.selectedPage : ''} onClick={onSetCurrentPageClick}>{p}</UniversalButton>)
				})}
			{portionCount > portionNumber && <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
		</div>
	)
}
