import { Path } from 'enums'
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

// const NotFound = lazy(() => import(/* webpackChunkName: 'NotFound' */'pages/notFound')
// 	.then(module => ({ default: module.NotFound })))

export const ROUTES = [
	{ path: Path.NOT_FOUND, element: <Navigate to={Path.NOT_FOUND_404} /> },
	// { path: Path.NOT_FOUND_404, element: <NotFound /> },
]
