import React, { FC, Suspense } from 'react'
import { Header, Loader } from 'components'
import { useSelector } from 'react-redux'
import { selectTheme } from 'store/selectors'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { ROUTES } from 'router'
import { Route, Routes } from 'react-router-dom'

export const App: FC = (): ReturnComponentType => {

  const theme = useSelector(selectTheme)

  return (
    <div className={`${'app'} ${theme === 'dark' && 'dark'} `}>
      <Header />
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
