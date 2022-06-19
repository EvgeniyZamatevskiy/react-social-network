import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Header, Navbar } from 'components'
import { Login, Profile, UsersList } from 'pages'
import { getIsInitialized } from 'store/selectors'
import { ReturnComponentType } from 'types'
import { useActions } from 'store/hooks/useActions/useActions'
import { appActionCreators } from 'store/actions'
import './App.css'

export const App = (): ReturnComponentType => {

  const { initializeAppTC } = useActions(appActionCreators)

  const isInitialized = useSelector(getIsInitialized)

  useEffect(() => {
    initializeAppTC()
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
          <Route path={'/profile/:userId?'} render={() => <Profile />} />
          <Route path={'/users'} render={() => <UsersList />} />
          <Route path={'/login'} render={() => <Login />} />
          <Redirect from="/" to="/profile" />
          <Route path={'*'} render={() => <div>404 page not found</div>} />
        </Switch>
      </div>
    </div>
  )
}
