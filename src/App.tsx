import React, { FC, Suspense, useEffect } from 'react'
import { Header, NavBar, ErrorAlert } from 'components'
import { TailSpin } from 'react-loader-spinner'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { useAppDispatch } from 'hooks'
import { selectIsInitializedApp } from 'store/selectors'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { getAuthorizedUserData } from 'store/asyncActions'
import { ROUTES } from 'router'

export const App: FC = (): ReturnComponentType => {

  const dispatch = useAppDispatch()

  const isInitializedApp = useSelector(selectIsInitializedApp)

  useEffect(() => {
    dispatch(getAuthorizedUserData())
  }, [])

  if (!isInitializedApp) {
    return <TailSpin color='#ff8b65' height={200} width={200} wrapperClass={'initialized'} />
  }

  return (
    <>
      <Header />
      <div className='container'>
        <div className='main'>
          <NavBar />
          <Suspense fallback={<TailSpin color='#ff8b65' height={200} width={200} wrapperClass={'initialized'} />}>
            <Routes>
              {ROUTES.map(({ path, element }) => <Route key={path} path={path} element={element} />)}
            </Routes>
          </Suspense>
        </div>
      </div>
      <ErrorAlert />
    </>
  )
}
