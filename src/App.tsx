import React, { FC, useEffect } from 'react'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { Header, Login, Navbar, Profile, Users } from 'components'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Path } from 'enums'
import { useTypedDispatch } from 'store/hooks'
import { initializeAppTC } from 'store/authReducer'
import { useSelector } from 'react-redux'
import { selectIsInitialize } from 'store/selectors/auth'
import { NotFound } from 'components/NotFound'

export const App: FC = (): ReturnComponentType => {

  const dispatch = useTypedDispatch()

  const isInitialize = useSelector(selectIsInitialize)

  useEffect(() => {
    dispatch(initializeAppTC())
  }, [])

  if (!isInitialize) {
    return <h1 style={{ position: 'fixed', top: '30%', textAlign: 'center', width: '100%' }}>Loading...</h1>
  }

  return (
    <>
      <Header />
      <div className='container'>
        <div className='main'>
          <Navbar />
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
    </>
  )
}
