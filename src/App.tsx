import React, { FC, Suspense, useEffect } from 'react'
import { ErrorAlert, Header, Loader, NavBar } from 'components'
import { useSelector } from 'react-redux'
import { selectErrorMessage, selectIsInitializedApp } from 'store/selectors'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { ROUTES } from 'router'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useAppDispatch, useTheme } from 'hooks'
import { getAuthorizedUserData } from 'store/asyncActions'
import { Path } from 'enums'

export const App: FC = (): ReturnComponentType => {

  const dispatch = useAppDispatch()

  const {pathname} = useLocation()

  const isDarkTheme = useTheme('dark')

  const errorMessage = useSelector(selectErrorMessage)
  const isInitializedApp = useSelector(selectIsInitializedApp)

  useEffect(() => {
    dispatch(getAuthorizedUserData())
  }, [])

  if (!isInitializedApp) {
    return <Loader/>
  }

  return (
    <div className={`${'app'} ${isDarkTheme && 'darkApp'}`}>
      {pathname !== `/${Path.NOT_FOUND_404}` && <Header/>}
      <div className="content">
        {pathname !== `/${Path.NOT_FOUND_404}` && pathname !== Path.LOGIN && <NavBar/>}
        {errorMessage && <ErrorAlert/>}
        <Suspense fallback={<Loader/>}>
          <Routes>
            {ROUTES.map(({path, element}) => <Route key={path} path={path} element={element}/>)}
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}
