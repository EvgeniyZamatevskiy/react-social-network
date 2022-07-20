import { Path } from 'enums'
import { Profile } from 'pages/profile'
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const Users = lazy(() => import(/* webpackChunkName: 'Users' */'pages/users')
	.then(module => ({ default: module.Users })))

const Login = lazy(() => import(/* webpackChunkName: 'Login' */'pages/login')
	.then(module => ({ default: module.Login })))

const NotFound = lazy(() => import(/* webpackChunkName: 'NotFound' */'pages/notFound')
	.then(module => ({ default: module.NotFound })))

export const ROUTES = [
	{ path: Path.HOME, element: <Navigate to={Path.PROFILE} /> },
	{ path: Path.PROFILE, element: <Profile /> },
	{ path: Path.USER_PROFILE, element: <Profile /> },
	{ path: Path.USERS, element: <Users /> },
	{ path: Path.LOGIN, element: <Login /> },
	{ path: Path.NOT_FOUND, element: <NotFound /> },
]
