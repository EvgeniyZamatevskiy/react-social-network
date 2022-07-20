import React, { FC, useEffect } from 'react'
import { Header, NavBar, Profile, Users, Login, NotFound, ErrorAlert } from 'components'
import { Path } from 'enums'
import { TailSpin } from 'react-loader-spinner'
import { useSelector } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAppDispatch } from 'store/hooks'
import { selectIsInitializedApp } from 'store/selectors'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { getUserData } from 'store/asyncActions'

export const App: FC = (): ReturnComponentType => {

  const dispatch = useAppDispatch()

  const isInitializedApp = useSelector(selectIsInitializedApp)

  useEffect(() => {
    dispatch(getUserData())
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
