import React, {FC, useEffect} from "react"
import {Filtration, Loader, Pagination, User, UsersEmpty} from "components"
import {ReturnComponentType} from "types"
import {useSelector} from "react-redux"
import {useAppDispatch} from "hooks"
import {getUsers} from "store/asyncActions"
import {Navigate} from "react-router-dom"
import {Path} from "enums"
import {setPage} from "store/slices/users"
import {
  selectFriend,
  selectIsAuth,
  selectIsLoadingUsers,
  selectPage,
  selectPageCount,
  selectTerm,
  selectTotalUsersCount,
  selectUsers
} from "store/selectors"
import style from "./Users.module.scss"

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
      <div className={style.users}>
        <div className={style.body}>
          <h2 className={style.title}>Users</h2>
          <Pagination
            totalItemsCount={totalUsersCount}
            pageCount={pageCount}
            page={page}
            handleSetPageClick={handleSetPageClick}
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
