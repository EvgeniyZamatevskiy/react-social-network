import React, {FC} from "react"
import {ReturnComponentType} from "types"
import {ProfileRightBlockPropsType} from "./types"
import {Information} from "pages/profile/information"
import {Posts, PostsEmpty} from "."
import style from "./ProfileRightBlock.module.scss"

export const ProfileRightBlock: FC<ProfileRightBlockPropsType> = ({isOwner}): ReturnComponentType => {
  return (
    <div className={style.rightBlock}>
      <Information isOwner={isOwner}/>
      {isOwner
        ? <Posts/>
        : <>
          <div className={style.searchPosts}>No posts yet</div>
          <PostsEmpty/>
        </>
      }
    </div>
  )
}
