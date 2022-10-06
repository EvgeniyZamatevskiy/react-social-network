import React, { FC, useEffect, useState } from 'react'
import { Path } from 'enums'
import { useSelector } from 'react-redux'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ReturnComponentType } from 'types'
import {
  selectAuthorizedUserDataId,
  selectIsAuth, selectIsDisabledFollowed,
  selectIsFollowed, selectIsLoadingFollowed,
  selectIsLoadingStatus, selectIsLoadingUserProfile,
  selectUserProfile
} from 'store/selectors'
import { useAppDispatch } from 'hooks'
import { follow, getFollowedStatus, getStatus, getUserProfile, unfollow } from 'store/asyncActions'
import { Information } from './information'
import { File, SmallLoader } from 'components'
import defaultAvatar from 'assets/images/defaultAvatar.png'
import style from './Profile.module.scss'

export const Profile: FC = (): ReturnComponentType => {

  const {userId} = useParams<{ userId: string }>()

  const dispatch = useAppDispatch()

  const isAuth = useSelector(selectIsAuth)
  const userProfile = useSelector(selectUserProfile)
  const authorizedUserDataId = useSelector(selectAuthorizedUserDataId)
  const isFollowed = useSelector(selectIsFollowed)
  const isLoadingStatus = useSelector(selectIsLoadingStatus)
  const isLoadingUserProfile = useSelector(selectIsLoadingUserProfile)
  const isLoadingFollowed = useSelector(selectIsLoadingFollowed)
  const isDisabledFollowed = useSelector(selectIsDisabledFollowed)

  const [isHoverAvatar, setIsHoverAvatar] = useState(false)

  const isOwner = !userId
  const userAvatar = userProfile.photos?.small || userProfile.photos?.large

  useEffect(() => {
    const id = isOwner ? authorizedUserDataId : userId

    if (isAuth) {
      dispatch(getStatus(Number(id)))
      dispatch(getFollowedStatus(Number(id)))
      dispatch(getUserProfile(Number(id)))
    }
  }, [userId])

  const onMouseEnter = (): void => {
    setIsHoverAvatar(true)
  }

  const onMouseLeave = (): void => {
    setIsHoverAvatar(false)
  }

  const onFollowClick = (): void => {
    dispatch(follow(Number(userId)))
  }

  const onUnfollowClick = (): void => {
    dispatch(unfollow(Number(userId)))
  }

  if (!isAuth) {
    return <Navigate to={Path.LOGIN}/>
  }

  // if (isLoadingUserProfile) {
  //   return <Loader/>
  // }

  return (
    <div className={style.container}>
      <div className={style.profile}>
        <div className={style.leftBlock}>

          <div className={style.content}>
            <div className={style.avatarImageContainer}>
              {userAvatar
                ? <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  <img className={style.avatarImage} src={userAvatar} alt="avatar"/>
                  {isHoverAvatar && isOwner && <File classNameButton={style.changeAvatarBtn}>Change avatar</File>}
                </div>
                : isOwner
                  ? <File>
                    <img className={style.defaultAvatarImage} src={defaultAvatar} alt="default avatar"/>
                    <div className={style.uploadPhoto}>Upload a profile photo</div>
                  </File>
                  : <img className={style.defaultAvatarImage} src={defaultAvatar} alt="default avatar"/>}
            </div>
            {isOwner
              ? <Link className={style.editLink} to={Path.EDIT}>Edit</Link>
              : isFollowed
                ? <button
                  className={style.followBtn}
                  onClick={onUnfollowClick}
                  disabled={isDisabledFollowed}
                >
                  {isLoadingFollowed ? <SmallLoader darkColor={'#000'} lightColor={'#fff'}/> : 'Unfollow'}
                </button>
                : <button
                  className={style.followBtn}
                  onClick={onFollowClick}
                  disabled={isDisabledFollowed}
                >
                  {isLoadingFollowed ? <SmallLoader darkColor={'#000'} lightColor={'#fff'}/> : 'Follow'}
                </button>}
          </div>
        </div>
        <div className={style.rightBlock}>
          <Information fullName={userProfile.fullName} isOwner={isOwner}/>
        </div>
      </div>
    </div>
  )
}
