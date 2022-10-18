import React, {FC, useEffect, useState} from "react"
import {ReturnComponentType} from "types/ReturnComponentType"
import {PaginationPropsType} from "./types"
import {Button} from "components"
import style from "./Pagination.module.scss"

export const Pagination: FC<PaginationPropsType> =
  ({
     totalItemsCount,
     pageCount,
     page,
     handleSetPageClick,
     portionSize = 10
   }): ReturnComponentType => {

    const [portionNumber, setPortionNumber] = useState(1)

    const pagesCount = Math.ceil(totalItemsCount / pageCount)
    const pages: number[] = []

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize
    const pagesFiltered = pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
    const pagesRender = pagesFiltered.map(p => {

      const onSetPageClick = (): void => handleSetPageClick(p)

      return (
        <Button key={p} className={`${style.button} ${page === p && style.active}`} onClick={onSetPageClick}>
          {p}
        </Button>
      )
    })

    useEffect(() => {
      setPortionNumber(Math.ceil(page / portionSize))
    }, [page])

    const onDecreasePortionNumberClick = (): void => setPortionNumber(portionNumber - 1)

    const onIncreasePortionNumberClick = (): void => setPortionNumber(portionNumber + 1)

    return (
      <div className={style.pagination}>
        {portionNumber > 1 &&
          <Button className={style.button} onClick={onDecreasePortionNumberClick}>&laquo;</Button>}
        {pagesRender}
        {portionCount > portionNumber &&
          <Button className={style.button} onClick={onIncreasePortionNumberClick}>&raquo;</Button>}
      </div>
    )
  }
