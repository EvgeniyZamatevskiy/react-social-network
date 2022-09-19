import { Path } from 'enums'
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

// const NotFound = lazy(() => import(/* webpackChunkName: 'NotFound' */'pages/notFound')
// 	.then(module => ({ default: module.NotFound })))

const Login = lazy(() => import(/* webpackChunkName: 'Login' */'pages/login')
	.then(module => ({ default: module.Login })))

export const ROUTES = [
	{ path: Path.LOGIN, element: <Login /> },
	{ path: Path.NOT_FOUND, element: <Navigate to={Path.NOT_FOUND_404} /> },
	// { path: Path.NOT_FOUND_404, element: <NotFound /> },
]
