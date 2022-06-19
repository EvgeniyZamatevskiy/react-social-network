import React, { ReactElement, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useActions } from 'store/hooks'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Header, Navbar } from 'components'
import { Dialogs, Login, Profile, UsersList } from 'pages'
import './App.css'
import { getIsInitialized } from 'store/selectors'
import { appActionCreators } from 'store/action-creators'
import { ReturnComponentType } from 'types'

export const App = (): ReturnComponentType => {

  const isInitialized = useSelector(getIsInitialized)
  const { initializeAppTC } = useActions(appActionCreators)

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
          <Route path={'/dialogs'} render={() => <Dialogs />} />
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