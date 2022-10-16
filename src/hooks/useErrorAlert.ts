import {useEffect} from "react"
import {useSelector} from "react-redux"
import {selectErrorMessage} from "store/selectors"
import {useAppDispatch} from "hooks/useAppDispatch"
import {setErrorMessage} from "store/slices/app"
import {EMPTY_STRING} from "constants/base"

export const useErrorAlert = (delay: number): () => void => {

  const dispatch = useAppDispatch()

  const errorMessage = useSelector(selectErrorMessage)

  useEffect(() => {
    if (errorMessage) {
      const timerId = setTimeout(() => {
        closeAlert()
      }, delay)

      return (() => {
        clearTimeout(timerId)
      })
    }
  }, [errorMessage])

  const closeAlert = (): void => {
    dispatch(setErrorMessage(EMPTY_STRING))
  }

  return closeAlert
}
