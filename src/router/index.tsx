import { Path } from 'enums'
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const NotFound = lazy(() => import(/* webpackChunkName: 'NotFound' */'pages/notFound')
  .then(module => ({default: module.NotFound})))

const Login = lazy(() => import(/* webpackChunkName: 'Login' */'pages/login')
  .then(module => ({default: module.Login})))

const Profile = lazy(() => import(/* webpackChunkName: 'Profile' */'pages/profile')
  .then(module => ({default: module.Profile})))

const Messages = lazy(() => import(/* webpackChunkName: 'Messages' */'pages/messages')
  .then(module => ({default: module.Messages})))

const Users = lazy(() => import(/* webpackChunkName: 'Users' */'pages/users')
  .then(module => ({default: module.Users})))

const Edit = lazy(() => import(/* webpackChunkName: 'Edit' */'pages/edit')
  .then(module => ({default: module.Edit})))

export const ROUTES = [
  {path: Path.HOME, element: <Navigate to={Path.PROFILE}/>},
  {path: Path.PROFILE, element: <Profile/>},
  {path: Path.MESSAGES, element: <Messages/>},
  {path: Path.USERS, element: <Users/>},
  {path: Path.EDIT, element: <Edit/>},
  {path: Path.LOGIN, element: <Login/>},
  {path: Path.NOT_FOUND, element: <Navigate to={Path.NOT_FOUND_404}/>},
  {path: Path.NOT_FOUND_404, element: <NotFound/>},
]
