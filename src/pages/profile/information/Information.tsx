import React, {FC, useState} from "react"
import {EditableItem, Line} from "components"
import {ReturnComponentType} from "types/ReturnComponentType"
import {InformationPropsType} from "./types"
import {useAppDispatch, useTheme} from "hooks"
import {useSelector} from "react-redux"
import {selectFullName, selectStatus} from "store/selectors"
import {updateStatus} from "store/asyncActions"
import {Data} from "../data"
import {EditData} from "../editData"
import style from "./Information.module.scss"
import {Theme} from "store/slices/app/types";

export const Information: FC<InformationPropsType> = ({isOwner}): ReturnComponentType => {

  const dispatch = useAppDispatch()

  const status = useSelector(selectStatus)
  const fullName = useSelector(selectFullName)

  const [isEditFullInfo, setIsEditFullInfo] = useState(false)

  const isDarkTheme = useTheme(Theme.DARK)

  const handleUpdateStatus = (updatedTitle: string): void => {
    dispatch(updateStatus(updatedTitle))
  }

  return (
    <div className={style.container}>

      <div className={style.nameContainer}>
        <div className={style.name}>{fullName}</div>
        <span className={style.online}>{isOwner ? "online" : "seen recently"}</span>
      </div>

      <div className={style.statusContainer}>
        {isOwner
          ? <EditableItem currentTitle={status} handleUpdateTitle={handleUpdateStatus} isDarkTheme={isDarkTheme}/>
          : <div className={style.status}>{status}</div>}
      </div>
      <Line/>

      {isEditFullInfo
        ? <EditData setIsEditFullInfo={setIsEditFullInfo}/>
        : <Data setIsEditFullInfo={setIsEditFullInfo} isOwner={isOwner}/>}
    </div>
  )
}
