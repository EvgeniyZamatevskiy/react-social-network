import {Button} from "components"
import React, {FC} from "react"
import {ReturnComponentType} from "types"
import {Icon20DoorArrowRightOutline} from "@vkontakte/icons"
import {useAppDispatch} from "hooks"
import {logOut} from "store/asyncActions"
import style from "./Header.module.scss"
import {useSelector} from "react-redux"
import {selectIsAuth} from "store/selectors"

export const Header: FC = (): ReturnComponentType => {

  const dispatch = useAppDispatch()

  const isAuth = useSelector(selectIsAuth)

  const onLogOutClick = (): void => {
    dispatch(logOut())
  }

  return (
    <header className={style.header}>
      <div className={style.container}>
        <h1 className={style.title}>social network</h1>
        {isAuth &&
          <Button className={style.logOutBtn} onClick={onLogOutClick}>
            <Icon20DoorArrowRightOutline className={style.logOutIcon} width={17} height={17} fill={"#71AAEB"}/>
            Log out
          </Button>
        }
      </div>
    </header>
  )
}
