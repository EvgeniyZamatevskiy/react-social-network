import { Path } from 'enums'
import { WithRequireAuth } from 'hoc'
import { Profile } from 'pages/profile'
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const Users = lazy(() => import(/* webpackChunkName: 'Users' */'pages/users')
	.then(module => ({ default: module.Users })))

const Login = lazy(() => import(/* webpackChunkName: 'Login' */'pages/login')
	.then(module => ({ default: module.Login })))

const NotFound = lazy(() => import(/* webpackChunkName: 'NotFound' */'pages/notFound')
	.then(module => ({ default: module.NotFound })))

const Chat = lazy(() => import(/* webpackChunkName: 'Chat' */'pages/chat')
	.then(module => ({ default: module.Chat })))

export const ROUTES = [
	{ path: Path.HOME, element: <Navigate to={Path.PROFILE} /> },
	{ path: Path.PROFILE, element: <WithRequireAuth><Profile /></WithRequireAuth> },
	{ path: Path.USER_PROFILE, element: <Profile /> },
	{ path: Path.CHAT, element: <WithRequireAuth><Chat /></WithRequireAuth> },
	{ path: Path.USERS, element: <WithRequireAuth><Users /></WithRequireAuth> },
	{ path: Path.LOGIN, element: <Login /> },
	{ path: Path.NOT_FOUND, element: <Navigate to={Path.NOT_FOUND_404} /> },
	{ path: Path.NOT_FOUND_404, element: <NotFound /> },
]
