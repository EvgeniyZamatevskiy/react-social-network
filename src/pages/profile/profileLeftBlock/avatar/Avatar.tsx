import React, {FC} from "react"
import {ReturnComponentType} from "types"
import {AvatarPropsType} from "pages/profile/profileLeftBlock/avatar/types"
import {Button, File, SmallLoader} from "components"
import {useSelector} from "react-redux"
import {
  selectIsDisabledFollowed,
  selectIsFollowed,
  selectIsLoadingFollowed,
  selectPhotoLarge,
  selectPhotoSmall
} from "store/selectors"
import {useAppDispatch, useFollow} from "hooks"
import defaultAvatar from "assets/images/defaultAvatar.png"
import style from "pages/profile/profileLeftBlock/avatar/Avatar.module.scss"
import {updatePhoto} from "store/asyncActions";
import {setErrorMessage} from "store/slices/app";

export const Avatar: FC<AvatarPropsType> = ({isOwner, userId}): ReturnComponentType => {

  const dispatch = useAppDispatch()

  const photoLarge = useSelector(selectPhotoLarge)
  const photoSmall = useSelector(selectPhotoSmall)
  const isFollowed = useSelector(selectIsFollowed)
  const isLoadingFollowed = useSelector(selectIsLoadingFollowed)
  const isDisabledFollowed = useSelector(selectIsDisabledFollowed)

  const {follow, unfollow} = useFollow(userId)

  const userAvatar = photoSmall || photoLarge

  const handleUpdatePhotoChange = (file: File): void => {
    dispatch(updatePhoto(file))
  }

  const handleSetErrorMessage = (errorMessage: string): void => {
    dispatch(setErrorMessage(errorMessage))
  }

  return (
    <div className={style.avatar}>

      {userAvatar
        ? <img className={style.userAvatarImage} src={userAvatar} alt="user avatar"/>
        : <img className={style.defaultAvatarImage} src={defaultAvatar} alt="default avatar"/>}

      {isOwner
        ? <File
          handleUpdatePhotoChange={handleUpdatePhotoChange}
          handleSetErrorMessage={handleSetErrorMessage}
          buttonClass={style.changeAvatar}
        >
          Change avatar
        </File>
        : isFollowed
          ? <Button className={style.followButton} isPrimary onClick={unfollow} disabled={isDisabledFollowed}>
            {isLoadingFollowed ? <SmallLoader/> : "Unfollow"}
          </Button>

          : <Button className={style.followButton} isPrimary onClick={follow} disabled={isDisabledFollowed}>
            {isLoadingFollowed ? <SmallLoader/> : "Follow"}
          </Button>
      }
    </div>
  )
}