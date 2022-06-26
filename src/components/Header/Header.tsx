import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { logoutTC } from 'store/authReducer'
import { useTypedDispatch } from 'store/hooks'
import { selectIsAuth, selectLogin } from 'store/selectors/auth'
import { ReturnComponentType } from 'types/ReturnComponentType'
import style from './Header.module.scss'

export const Header: FC = (): ReturnComponentType => {

  const dispatch = useTypedDispatch()

  const login = useSelector(selectLogin)
  const isAuth = useSelector(selectIsAuth)

  const onLogoutClick = (): void => {
    dispatch(logoutTC())
  }

  return (
    <header className={style.header}>
      <h1 className={style.title}>Social network</h1>
      <div className={style.body}>
        {isAuth &&
          <>
            <div className={style.name}>{login}</div>
            <button className={style.logOut} onClick={onLogoutClick}>Log out</button>
          </>
        }
      </div>
    </header>
  )
}
