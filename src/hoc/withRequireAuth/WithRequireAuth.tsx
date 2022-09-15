import React, { FC } from 'react'
import { Path } from 'enums'
import { Navigate, useLocation } from 'react-router-dom'
import { ReturnComponentType } from 'types'
import { RequireAuthPropsType } from './types'
import { useSelector } from 'react-redux'
import { selectIsAuth } from 'store/selectors'

export const WithRequireAuth: FC<RequireAuthPropsType> = ({ children }): ReturnComponentType => {

	const location = useLocation()

	const isAuth = useSelector(selectIsAuth)

	if (!isAuth) {
		return <Navigate to={Path.LOGIN} state={{ from: location }} />
	}

	return <>{children}</>
}

// export const WithRequireAuth = (Component: () => ReturnComponentType) => {

// 	return (props: any) => {
// 		const location = useLocation()

// 		const isAuth = useSelector(selectIsAuth)

// 		if (!isAuth) {
// 			return <Navigate to={Path.LOGIN} state={{ from: location }} />
// 		}

// 		return <Component />
// 	}
// }
