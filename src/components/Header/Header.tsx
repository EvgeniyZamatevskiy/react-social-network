import React, { FC } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { useSelector } from 'react-redux'
import { useTypedDispatch } from 'store/hooks'
import { logOutTC } from 'store/middlewares'
import { selectLogin, selectIsAuth, selectIsLoading } from 'store/selectors'
import { ReturnComponentType } from 'types/ReturnComponentType'
import style from './Header.module.scss'

export const Header: FC = (): ReturnComponentType => {

  const dispatch = useTypedDispatch()

  const login = useSelector(selectLogin)
  const isAuth = useSelector(selectIsAuth)
  const isLoading = useSelector(selectIsLoading)

  const onLogOutClick = (): void => {
    dispatch(logOutTC())
  }

  return (
    <header className={style.header}>
      {isLoading && <TailSpin wrapperClass={style.tailSpin} color='#ff8b65' height={60} width={60} />}
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
