import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Header, Login, Navbar, Profile, UsersList } from 'components'
import { selectIsInitialized } from 'store/selectors'
import { ReturnComponentType } from 'types'
import { useTypedDispatch } from 'store/hooks'
import { initializeAppTC } from 'store/middlewares/app'
import { Path } from 'enums'
import './styles/App.css'

export const App = (): ReturnComponentType => {

  const dispatch = useTypedDispatch()

  const isInitialized = useSelector(selectIsInitialized)

  useEffect(() => {
    dispatch(initializeAppTC())
  }, [])

  if (!isInitialized) {
    return (
      <h1 style={{ position: 'fixed', top: '30%', textAlign: 'center', width: '100%' }}>Loading...</h1>
    )
  }

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Switch>
          <Route path={`${Path.profile}/:userId?`} render={() => <Profile />} />
          <Route path={Path.users} render={() => <UsersList />} />
          <Route path={Path.login} render={() => <Login />} />
          <Redirect from={Path.home} to={Path.profile} />
          <Route path={Path.notFound} render={() => <div>404 page not found</div>} />
        </Switch>
      </div>
    </div>
  )
}
