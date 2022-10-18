import React, {FC} from "react"
import {ReturnComponentType} from "types"
import {removePost} from "store/slices/profile"
import {useAppDispatch} from "hooks"
import style from "./PostInfoPopup.module.scss"
import {PostInfoPopupPropsType} from "./types"
import {Button} from "components"

export const PostInfoPopup: FC<PostInfoPopupPropsType> = ({postId, onSetIsEditPostClick,}): ReturnComponentType => {

  const dispatch = useAppDispatch()

  const onRemovePostClick = (): void => {
    dispatch(removePost(postId))
  }

  return (
    <div className={style.postInfoPopup}>
      <Button className={style.deletePostButton} onClick={onRemovePostClick}>Delete post</Button>
      <Button className={style.editPostButton} onClick={onSetIsEditPostClick}>Edit post</Button>
    </div>
  )
}
