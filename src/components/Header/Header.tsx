import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { logOutTC } from 'store/authReducer'
import { useTypedDispatch } from 'store/hooks'
import { selectLogin, selectIsAuth } from 'store/selectors/auth'
import { ReturnComponentType } from 'types/ReturnComponentType'
import style from './Header.module.scss'

export const Header: FC = (): ReturnComponentType => {

  const dispatch = useTypedDispatch()

  const login = useSelector(selectLogin)
  const isAuth = useSelector(selectIsAuth)

  const onLogOutClick = (): void => {
    dispatch(logOutTC())
  }

  return (
    <header className={style.header}>
      <h1>Social network</h1>
      <div className={style.body}>
        {isAuth &&
          <>
            <div className={style.authorizedUserLogin}>{login}</div>
            <button onClick={onLogOutClick}>Log out</button>
          </>
        }
      </div>
    </header>
  )
}
