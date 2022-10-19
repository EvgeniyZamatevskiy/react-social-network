import React from "react"
import {Navigate, useLocation} from "react-router-dom"
import {ReturnComponentType} from "types"
import {useSelector} from "react-redux"
import {selectIsAuth} from "store/selectors"
import {Path} from "enums"

export const WithRequireAuth = (Component: () => ReturnComponentType) => {

  const NavigateComponent = () => {

    const isAuth = useSelector(selectIsAuth)

    const location = useLocation()

    if (!isAuth) {
      return <Navigate to={Path.LOGIN} state={{from: location}}/>
    }

    return <Component/>
  }

  return NavigateComponent
}
