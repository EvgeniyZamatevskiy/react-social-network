import React, { FC } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { useSelector } from 'react-redux'
import { logOut } from 'store/asyncActions'
import { useAppDispatch } from 'store/hooks'
import { selectIsAuth, selectIsLoading, selectUserData } from 'store/selectors'
import { ReturnComponentType } from 'types/ReturnComponentType'
import style from './Header.module.scss'

export const Header: FC = (): ReturnComponentType => {

  const dispatch = useAppDispatch()

  const userData = useSelector(selectUserData)
  const isAuth = useSelector(selectIsAuth)
  const isLoading = useSelector(selectIsLoading)

  const onLogOutClick = (): void => {
    dispatch(logOut())
  }

  return (
    <header className={style.header}>
      {isLoading && <TailSpin wrapperClass={style.tailSpin} color='#ff8b65' height={60} width={60} />}
      <h1>Social network</h1>
      <div className={style.body}>
        {isAuth &&
          <>
            <div className={style.authorizedUserLogin}>{userData?.login}</div>
            <button onClick={onLogOutClick}>Log out</button>
          </>
        }
      </div>
    </header>
  )
}
