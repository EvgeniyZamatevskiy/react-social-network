import React, {FC} from "react"
import {ReturnComponentType} from "types"
import {PostInfoPopupPropsType} from "./types"
import {Button} from "components"
import style from "./PostInfoPopup.module.scss"

export const PostInfoPopup: FC<PostInfoPopupPropsType> =
  ({
     onSetIsEditPostClick,
     onActivateModalClick
   }): ReturnComponentType => {
    return (
      <div className={style.postInfoPopup}>
        <Button className={style.deletePostButton} onClick={onActivateModalClick}>Delete post</Button>
        <Button className={style.editPostButton} onClick={onSetIsEditPostClick}>Edit post</Button>
      </div>
    )
  }
