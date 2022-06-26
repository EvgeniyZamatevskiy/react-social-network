import React, { FC, useEffect } from 'react'
import { Header, NavBar, Profile, Users, Login, NotFound, ErrorAlert } from 'components'
import { Path } from 'enums'
import { useSelector } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'
import { initializeAppTC } from 'store/authReducer'
import { useTypedDispatch } from 'store/hooks'
import { selectIsInitialized } from 'store/selectors/auth'
import { ReturnComponentType } from 'types/ReturnComponentType'

export const App: FC = (): ReturnComponentType => {

  const dispatch = useTypedDispatch()

  const isInitialized = useSelector(selectIsInitialized)

  useEffect(() => {
    dispatch(initializeAppTC())
  }, [])

  if (!isInitialized) {
    return <h1 className='initialized'>Loading...</h1>
  }

  return (
    <>
      <Header />
      <div className='container'>
        <div className='main'>
          <NavBar />
          <Routes>
            <Route path={Path.home} element={<Navigate to={Path.profile} />} />
            <Route path={Path.profile} element={<Profile />} />
            <Route path={Path.userProfile} element={<Profile />} />
            <Route path={Path.users} element={<Users />} />
            <Route path={Path.login} element={<Login />} />
            <Route path={Path.notFound} element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <ErrorAlert />
    </>
  )
}
