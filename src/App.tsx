import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar/Navbar'
import { DialogsList } from './pages/DialogsLists/DialogsList'
import { Profile } from './pages/Profile/Profile'
import { UsersList } from './pages/UsersList/UsersList'
import './App.css'

export const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path={'/'} element={<Profile />} />
          <Route path={'/dialogs'} element={<DialogsList />} />
          <Route path={'/users'} element={<UsersList />} />
          <Route path={'404'} element={<h1>404 page not found</h1>} />
          <Route path={'*'} element={<Navigate to={'404'} />} />
        </Routes>
      </div>
    </div>
  )
}