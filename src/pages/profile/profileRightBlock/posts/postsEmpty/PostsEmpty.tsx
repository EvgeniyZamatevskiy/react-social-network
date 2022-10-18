import React, {FC} from "react"
import {ReturnComponentType} from "types"
import {Icon56NewsfeedOutline} from "@vkontakte/icons"
import style from "./PostsEmpty.module.scss"

export const PostsEmpty: FC = (): ReturnComponentType => {
  return (
    <div className={style.postsEmpty}>
      <div className={style.body}>
        <Icon56NewsfeedOutline className={style.icon}/>
        <div className={style.text}>There are no posts here yet</div>
      </div>
    </div>
  )
}
