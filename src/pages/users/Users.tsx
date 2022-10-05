import React, { FC, useEffect } from 'react'
import { Loader, User, Filtration, UsersEmpty, Pagination } from 'components'
import { ReturnComponentType } from 'types'
import { useSelector } from 'react-redux'
import { useAppDispatch, useTheme } from 'hooks'
import { getUsers } from 'store/asyncActions'
import { Navigate } from 'react-router-dom'
import { Path } from 'enums'
import { setPage } from 'store/slices/users'
import {
  selectFriend,
  selectIsAuth,
  selectIsLoadingUsers,
  selectPageCount,
  selectTerm,
  selectUsers,
  selectPage,
  selectTotalUsersCount
} from 'store/selectors'
import style from './Users.module.scss'

export const Users: FC = (): ReturnComponentType => {

  const dispatch = useAppDispatch()

  const users = useSelector(selectUsers)
  const isAuth = useSelector(selectIsAuth)
  const isLoadingUsers = useSelector(selectIsLoadingUsers)
  const term = useSelector(selectTerm)
  const friend = useSelector(selectFriend)
  const page = useSelector(selectPage)
  const pageCount = useSelector(selectPageCount)
  const totalUsersCount = useSelector(selectTotalUsersCount)

  const isDarkTheme = useTheme('dark')

  const usersRender = users.map((user) => <User key={user.id} user={user}/>)

  useEffect(() => {
    if (isAuth) {
      dispatch(getUsers({term, friend, page, pageCount}))
    }
  }, [term, friend, page])

  const handleSetPageClick = (page: number) => {
    dispatch(setPage(page))
  }

  if (!isAuth) {
    return <Navigate to={Path.LOGIN}/>
  }

  return (
    <div className={style.container}>
      <div className={`${style.users} ${isDarkTheme && style.usersDark}`}>
        <div className={`${style.body} ${isDarkTheme && style.bodyDark}`}>
          <h2 className={style.title}>Users</h2>
          <Pagination
            totalItemsCount={totalUsersCount}
            pageCount={pageCount}
            page={page}
            handleSetPageClick={handleSetPageClick}
            isDarkTheme={isDarkTheme}
          />
        </div>
        <Filtration/>
        <div className={style.userContainer}>
          {isLoadingUsers
            ? <Loader/>
            : usersRender.length ? usersRender : <UsersEmpty/>}
        </div>
      </div>
    </div>
  )
}
