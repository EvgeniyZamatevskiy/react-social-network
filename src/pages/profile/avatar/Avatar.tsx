import React, {FC} from "react"
import {ReturnComponentType} from "types"
import {AvatarPropsType} from "./types"
import {File, SmallLoader} from "components"
import defaultAvatar from "assets/images/defaultAvatar.png"
import {useSelector} from "react-redux"
import {
  selectIsDisabledFollowed,
  selectIsFollowed,
  selectIsLoadingFollowed,
  selectPhotoLarge,
  selectPhotoSmall
} from "store/selectors"
import {follow, unfollow} from "store/asyncActions"
import {useAppDispatch} from "hooks"
import style from "./Avatar.module.scss"

export const Avatar: FC<AvatarPropsType> = ({isOwner, userId}): ReturnComponentType => {

  const dispatch = useAppDispatch()

  const photoLarge = useSelector(selectPhotoLarge)
  const photoSmall = useSelector(selectPhotoSmall)
  const isFollowed = useSelector(selectIsFollowed)
  const isLoadingFollowed = useSelector(selectIsLoadingFollowed)
  const isDisabledFollowed = useSelector(selectIsDisabledFollowed)

  const userAvatar = photoSmall || photoLarge

  const onFollowClick = (): void => {
    dispatch(follow(userId))
  }

  const onUnfollowClick = (): void => {
    dispatch(unfollow(userId))
  }

  return (
    <div className={style.avatar}>

      {userAvatar
        ? <img className={style.userAvatarImage} src={userAvatar} alt="user avatar"/>
        : <img className={style.defaultAvatarImage} src={defaultAvatar} alt="default avatar"/>}

      {isOwner
        ? <File classNameButton={style.editLink}>Change avatar</File>
        : isFollowed
          ? <button className={style.followBtn} onClick={onUnfollowClick} disabled={isDisabledFollowed}>
            {isLoadingFollowed ? <SmallLoader color={"#fff"}/> : "Unfollow"}
          </button>
          : <button className={style.followBtn} onClick={onFollowClick} disabled={isDisabledFollowed}>
            {isLoadingFollowed ? <SmallLoader color={"#fff"}/> : "Follow"}
          </button>
      }
    </div>
  )
}
