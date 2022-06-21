import React, { FC } from 'react'
import { Home, Login } from 'components'
import { Route, Routes } from 'react-router-dom'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { Path } from 'enums'

export const App: FC = (): ReturnComponentType => {
  return (
    <div>
      <Routes>
        <Route path={Path.home} element={<Home />} />
        <Route path={Path.login} element={<Login />} />
      </Routes>
    </div>
  )
}
