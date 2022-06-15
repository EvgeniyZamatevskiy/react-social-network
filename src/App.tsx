import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar/Navbar'
import { DialogsList } from './pages/DialogsLists/DialogsList'
import { Profile } from './pages/Profile/Profile'
import { UsersList } from './pages/UsersList/UsersList'
import { useSelector } from 'react-redux'
import { selectIsInitialized } from './redux/reducers/app-reducer/selectors'
import { useActions } from './redux/hooks'
import { authActionCreators } from './redux/reducers/auth-reducer'
import { Login } from './components/Login/Login'
import './App.css'

export const App = () => {

  const isInitialized = useSelector(selectIsInitialized)
  const { getUserDataTC } = useActions(authActionCreators)

  useEffect(() => {
    getUserDataTC()
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
        <Routes>
          <Route path={'/'} element={<Navigate to={'profile/19283'} />} />
          <Route path={'/profile/:userId'} element={<Profile />} />
          <Route path={'/dialogs'} element={<DialogsList />} />
          <Route path={'/users'} element={<UsersList />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'404'} element={<h1>404 page not found</h1>} />
          <Route path={'*'} element={<Navigate to={'404'} />} />
        </Routes>
      </div>
    </div>
  )
}