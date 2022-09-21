import React, { FC, Suspense, useEffect } from 'react'
import { ErrorAlert, Header, Loader } from 'components'
import { useSelector } from 'react-redux'
import { selectErrorMessage, selectTheme } from 'store/selectors'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { ROUTES } from 'router'
import { Route, Routes } from 'react-router-dom'
import { useAppDispatch } from 'hooks'
import { getAuthorizedUserData } from 'store/asyncActions'

export const App: FC = (): ReturnComponentType => {

  const dispatch = useAppDispatch()

  const theme = useSelector(selectTheme)
  const errorMessage = useSelector(selectErrorMessage)

  useEffect(() => {
    dispatch(getAuthorizedUserData())
  }, [])

  return (
    <div className={`${'app'} ${theme === 'dark' && 'dark'} `}>
      <Header />
      {errorMessage && <ErrorAlert />}
      <div className='container'>
        <Suspense fallback={<Loader />}>
          <Routes>
            {ROUTES.map(({ path, element }) => <Route key={path} path={path} element={element} />)}
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}
