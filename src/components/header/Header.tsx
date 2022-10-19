import {Button} from "components"
import React, {FC} from "react"
import {ReturnComponentType} from "types"
import {Icon20DoorArrowRightOutline} from "@vkontakte/icons"
import {useAppDispatch} from "hooks"
import {logOut} from "store/asyncActions"
import {useSelector} from "react-redux"
import {selectIsAuth} from "store/selectors"
import style from "./Header.module.scss"

export const Header: FC = (): ReturnComponentType => {

  const dispatch = useAppDispatch()

  const isAuth = useSelector(selectIsAuth)

  const onLogOutClick = (): void => {
    dispatch(logOut())
  }

  return (
    <header className={style.header}>
      <div className={style.container}>
        <h1>social network</h1>
        {isAuth &&
          <Button className={style.button} onClick={onLogOutClick}>
            <Icon20DoorArrowRightOutline className={style.icon} width={17} height={17}/>
            Log out
          </Button>}
      </div>
    </header>
  )
}
