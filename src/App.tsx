import React, { useEffect } from 'react'
import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar/Navbar'
import { Profile } from './pages/Profile/Profile'
import { UsersList } from './pages/UsersList/UsersList'
import { useSelector } from 'react-redux'
import { selectIsInitialized } from './redux/reducers/app-reducer/selectors'
import { useActions } from './redux/hooks'
import { Login } from './pages/Login/Login'
import { Route } from 'react-router-dom'
import { appActionCreators } from './redux/reducers/app-reducer'
import './App.css'
import { Dialogs } from './pages/Dialogs/Dialogs'

export const App = () => {

  const isInitialized = useSelector(selectIsInitialized)
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
        <Route path={'/dialogs'} render={() => <Dialogs />} />
        <Route path={'/profile/:userId?'} render={() => <Profile />} />
        <Route path={'/users'} render={() => <UsersList />} />
        <Route path={'/login'} render={() => <Login />} />
      </div>
    </div>
  )
}