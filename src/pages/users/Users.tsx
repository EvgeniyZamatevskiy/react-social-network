import React, { FC, useEffect, useState } from 'react'
import { Loader, User, Filtration, UsersEmpty } from 'components'
import { ReturnComponentType } from 'types'
import { useSelector } from 'react-redux'
import { useAppDispatch, useTheme } from 'hooks'
import { getUsers } from 'store/asyncActions'
import {
  selectFriend,
  selectIsAuth,
  selectIsLoadingUsers,
  selectPageCount,
  selectTerm,
  selectUsers,
  selectPage
} from 'store/selectors'
import { Navigate } from 'react-router-dom'
import { Path } from 'enums'
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

  const isDarkTheme = useTheme('dark')

  const usersRender = users.map((user) => <User key={user.id} user={user}/>)

  useEffect(() => {
    dispatch(getUsers({term, friend, page, pageCount}))
  }, [term, friend])

  if (!isAuth) {
    return <Navigate to={Path.LOGIN}/>
  }

  return (
    <div className={style.container}>
      <div className={`${style.users} ${isDarkTheme && style.usersDark}`}>
        <h2 className={`${style.title} ${isDarkTheme && style.titleDark}`}>Users</h2>
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
