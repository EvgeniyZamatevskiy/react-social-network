import React, { FC, useEffect } from 'react'
import { Path } from 'enums'
import { useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import { ReturnComponentType } from 'types'
import {
  selectAuthorizedUserId,
  selectIsAuth,
  selectIsDisabledFollowed,
  selectIsFollowed,
  selectIsLoadingFollowed, selectPhotoLarge, selectPhotoSmall
} from 'store/selectors'
import { useAppDispatch } from 'hooks'
import { follow, getFollowedStatus, getStatus, getUserProfile, unfollow } from 'store/asyncActions'
import { Information } from './information'
import { AddPost, File, Posts, PostsEmpty, SmallLoader } from 'components'
import defaultAvatar from 'assets/images/defaultAvatar.png'
import style from './Profile.module.scss'

export const Profile: FC = (): ReturnComponentType => {

  const {userId} = useParams<{ userId: string }>()

  const dispatch = useAppDispatch()

  const isAuth = useSelector(selectIsAuth)
  const photoLarge = useSelector(selectPhotoLarge)
  const photoSmall = useSelector(selectPhotoSmall)
  const authorizedUserId = useSelector(selectAuthorizedUserId)
  const isFollowed = useSelector(selectIsFollowed)
  const isLoadingFollowed = useSelector(selectIsLoadingFollowed)
  const isDisabledFollowed = useSelector(selectIsDisabledFollowed)

  const isOwner = !userId
  const userAvatar = photoSmall || photoLarge

  useEffect(() => {
    const id = isOwner ? authorizedUserId : userId

    if (isAuth) {
      dispatch(getStatus(Number(id)))
      dispatch(getFollowedStatus(Number(id)))
      dispatch(getUserProfile(Number(id)))
    }
  }, [userId])

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
                ? <img className={style.avatarImage} src={userAvatar} alt="avatar"/>
                : isOwner
                  ? <File>
                    <img className={style.defaultAvatarImage} src={defaultAvatar} alt="default avatar"/>
                    <div className={style.uploadPhoto}>Upload a profile photo</div>
                  </File>
                  : <img className={style.defaultAvatarImage} src={defaultAvatar} alt="default avatar"/>}
            </div>
            {isOwner
              ? <File classNameButton={style.editLink}>Change avatar</File>
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
          <Information isOwner={isOwner}/>
          {isOwner ? <Posts/> : <PostsEmpty/>}
        </div>
      </div>
    </div>
  )
}
