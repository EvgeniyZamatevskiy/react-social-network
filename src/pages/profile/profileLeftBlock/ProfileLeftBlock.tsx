import React, {FC} from "react"
import {ReturnComponentType} from "types"
import {Avatar} from "pages/profile/profileLeftBlock/avatar"
import {ProfileLeftBlockPropsType} from "./types"
import style from "./ProfileLeftBlock.module.scss"

export const ProfileLeftBlock: FC<ProfileLeftBlockPropsType> = ({userId, isOwner}): ReturnComponentType => {
  return (
    <div className={style.profileLeftBlock}>
      <Avatar isOwner={isOwner} userId={userId}/>
    </div>
  )
}
