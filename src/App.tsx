import React, {FC, Suspense, useEffect} from "react"
import {useSelector} from "react-redux"
import {ReturnComponentType} from "types/ReturnComponentType"
import {ROUTES} from "router"
import {Route, Routes, useLocation} from "react-router-dom"
import {getAuthorizedUser} from "store/asyncActions"
import {Path} from "enums"
import {useAppDispatch, useErrorAlert} from "hooks"
import {Alert, Header, Loader, NavBar} from "components"
import {selectErrorMessage, selectIsInitializedApp} from "store/selectors"

export const App: FC = (): ReturnComponentType => {

  const dispatch = useAppDispatch()

  const {pathname} = useLocation()

  const closeAlert = useErrorAlert(3000)

  const errorMessage = useSelector(selectErrorMessage)
  const isInitializedApp = useSelector(selectIsInitializedApp)

  useEffect(() => {
    dispatch(getAuthorizedUser())
  }, [])

  if (!isInitializedApp) {
    return <Loader/>
  }

  return (
    <div className="app">
      {pathname !== `/${Path.NOT_FOUND_404}` && <Header/>}
      <div className="container">
        {pathname !== `/${Path.NOT_FOUND_404}` && pathname !== Path.LOGIN && <NavBar/>}
        {errorMessage &&
          <div className="errorAlertContainer">
            <Alert message={errorMessage} onCloseAlertClick={closeAlert} type={"error"}/>
          </div>}
        <Suspense fallback={<Loader/>}>
          <Routes>
            {ROUTES.map(({path, element}) => <Route key={path} path={path} element={element}/>)}
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}
