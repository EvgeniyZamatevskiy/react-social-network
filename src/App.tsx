import React, { FC, Suspense, useEffect } from 'react'
import { ErrorAlert, Header, Loader } from 'components'
import { useSelector } from 'react-redux'
import { selectErrorMessage, selectIsInitializedApp, selectTheme } from 'store/selectors'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { ROUTES } from 'router'
import { Route, Routes } from 'react-router-dom'
import { useAppDispatch } from 'hooks'
import { getAuthorizedUserData } from 'store/asyncActions'
import { isDarkTheme } from 'utils'

export const App: FC = (): ReturnComponentType => {

  const dispatch = useAppDispatch()

  const theme = useSelector(selectTheme)
  const errorMessage = useSelector(selectErrorMessage)
  const isInitializedApp = useSelector(selectIsInitializedApp)

  useEffect(() => {
    dispatch(getAuthorizedUserData())
  }, [])

  if (!isInitializedApp) {
    return <Loader />
  }

  return (
    <div className={`${'app'} ${isDarkTheme(theme) && 'darkApp'} `}>
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
