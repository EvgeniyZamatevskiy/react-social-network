import React, { FC, useEffect, useState } from 'react'
import s from './Paginator.module.css'
import { UniversalButton } from '../UI/UniversalButton/UniversalButton'

type PaginatorPropsType = {
	setCurrentPage: (currentPage: number) => void
	totalItemsCount: number
	count: number
	page: number
}

export const Paginator: FC<PaginatorPropsType> = ({ setCurrentPage, totalItemsCount, count, page }) => {

	const pagesCount = Math.ceil(totalItemsCount / count)

	const pages = []
	for (let i = 1; i < pagesCount; i++) {
		pages.push(i)
	}

	const [portionNumber, setPortionNumber] = useState(1)

	const portionSize = 10
	const portionCount = Math.ceil(pagesCount / portionSize)
	const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
	const rightPortionPageNumber = portionNumber * portionSize

	useEffect(() => {
		setPortionNumber(Math.ceil(page / portionSize))
	}, [page])

	return (
		<div className={s.paginator}>
			{portionNumber > 1 &&
				<button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}

			{pages
				.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
				.map(p => {

					const setCurrentPageHandler = () => {
						setCurrentPage(p)
					}

					return (
						<UniversalButton key={p} className={page === p ? s.selectedPage : ''} onClick={setCurrentPageHandler}>{p}</UniversalButton>)
				})}
			{portionCount > portionNumber && <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
		</div>
	)
}