import React, {ComponentType, FC} from 'react'
import {Path} from 'enums'
import {Navigate, useLocation} from 'react-router-dom'
import {ReturnComponentType} from 'types'
import {WithAuthNavigatePropsType} from './types'
import {useSelector} from 'react-redux'
import {selectIsAuth} from 'store/selectors'

// export const WithAuthNavigate: FC<WithAuthNavigatePropsType> = ({ children }): ReturnComponentType => {
//
// 	const location = useLocation()
//
// 	const isAuth = useSelector(selectIsAuth)
//
// 	if (!isAuth) {
// 		return <Navigate to={Path.LOGIN} state={{ from: location }} />
// 	}
//
// 	return <>{children}</>
// }

export const WithAuthNavigate = <T, >(WrappedComponent: ComponentType<T>) => {

  const NavigateComponent = (props: T) => {

    const location = useLocation()

    const isAuth = useSelector(selectIsAuth)

    if (!isAuth) {
      return <Navigate to={Path.LOGIN} state={{from: location}}/>
    }

    return <WrappedComponent {...props}/>
  }

  return NavigateComponent
}
