import React, { FC, useEffect, useState } from 'react'
import { Path } from 'enums'
import { useSelector } from 'react-redux'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ReturnComponentType } from 'types'
import { selectAuthorizedUserDataId, selectIsAuth, selectIsFollowed, selectUserProfile } from 'store/selectors'
import { useAppDispatch } from 'hooks'
import { follow, getFollowedStatus, getStatus, getUserProfile, unfollow } from 'store/asyncActions'
import { Information } from './information'
import defaultAvatar from 'assets/images/defaultAvatar.png'
import style from './Profile.module.scss'
import { File } from 'components'

export const Profile: FC = (): ReturnComponentType => {

  const {userId} = useParams<{ userId: string }>()

  const dispatch = useAppDispatch()

  const isAuth = useSelector(selectIsAuth)
  const userProfile = useSelector(selectUserProfile)
  const authorizedUserDataId = useSelector(selectAuthorizedUserDataId)
  const isFollowed = useSelector(selectIsFollowed)

  const [isHoverAvatar, setIsHoverAvatar] = useState(false)

  const isOwner = !userId
  const userAvatar = userProfile.photos?.small || userProfile.photos?.large

  useEffect(() => {
    const id = isOwner ? authorizedUserDataId : userId

    dispatch(getUserProfile(Number(id)))
    dispatch(getStatus(Number(id)))
    dispatch(getFollowedStatus(Number(id)))
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

  return (
    <div className={style.container}>
      <div className={style.profile}>
        <div className={style.leftBlock}>

          <div className={style.content}>
            <div className={style.avatarImageContainer}>
              {userAvatar
                ?
                <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  <img className={style.avatarImage} src={userAvatar} alt="avatar"/>
                  {isHoverAvatar && isOwner && <File classNameButton={style.changeAvatarBtn}>Change avatar</File>}
                </div>
                :
                <File>
                  <img className={style.defaultAvatarImage} src={defaultAvatar} alt="default avatar"/>
                  <div className={style.uploadPhoto}>Upload a profile photo</div>
                </File>}
            </div>
            {isOwner
              ? <div className={style.editLink}>
                <Link to={Path.EDIT}>Edit</Link>
              </div>
              : isFollowed ? <button className={style.followBtn} onClick={onUnfollowClick}>Unfollow</button> :
                <button className={style.followBtn} onClick={onFollowClick}>Follow</button>}
          </div>
        </div>
        <div className={style.rightBlock}>
          <Information
            fullName={userProfile.fullName}
            isOwner={isOwner}
          />
        </div>
      </div>
    </div>
  )
}
