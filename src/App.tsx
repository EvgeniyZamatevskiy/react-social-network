import React, { FC } from 'react'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { Header, Login, Navbar, Profile, Users } from 'components'
import { Route, Routes } from 'react-router-dom'
import { Path } from 'enums'

export const App: FC = (): ReturnComponentType => {
  return (
    <>
      <Header />
      <div className='container'>
        <div className='main'>
          <Navbar />
          <Routes>
            <Route path={Path.profile} element={<Profile />} />
            <Route path={Path.users} element={<Users />} />
            <Route path={Path.login} element={<Login />} />
          </Routes>
        </div>
      </div>
    </>
  )
}
