import React, { FC, useEffect, useState } from 'react'
import { Path } from 'enums'
import { useSelector } from 'react-redux'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ReturnComponentType } from 'types'
import { selectAuthorizedUserDataId, selectIsAuth, selectUserProfile } from 'store/selectors'
import { useAppDispatch } from 'hooks'
import { getUserProfile } from 'store/asyncActions'
import { Information } from './information'
import { Icon12CancelOutline } from '@vkontakte/icons'
import { Icon24Forward } from '@vkontakte/icons'
import defaultAvatar from 'assets/images/defaultAvatar.png'
import style from './Profile.module.scss'

export const Profile: FC = (): ReturnComponentType => {

  const {userId} = useParams<{ userId: string }>()

  const dispatch = useAppDispatch()

  const isAuth = useSelector(selectIsAuth)
  const userProfile = useSelector(selectUserProfile)
  const authorizedUserDataId = useSelector(selectAuthorizedUserDataId)

  const [isHoverAvatar, setIsHoverAvatar] = useState(false)

  const isOwner = !userId

  useEffect(() => {
    const id = isOwner ? authorizedUserDataId : userId

    dispatch(getUserProfile(Number(id)))
  }, [userId])

  const onMouseEnter = () => {
    setIsHoverAvatar(true)
  }

  const onMouseLeave = () => {
    setIsHoverAvatar(false)
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
              {userProfile.photos?.small
                ? <>
                  <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <img className={style.avatarImageTest} src={userProfile.photos?.small} alt="avatar"/>
                    {isHoverAvatar &&
                      <>
                        <div className={style.deleteAvatarContainer}>
                          <button className={style.deleteAvatar}><Icon12CancelOutline height={15} width={15}/></button>
                        </div>
                        <button className={style.updatePhotoBtn}>Update photo</button>
                      </>}
                  </div>
                </>
                : <>
                  <img className={style.defaultAvatarImage} src={defaultAvatar} alt="default avatar"/>
                  <button className={style.editPhoto}>Upload a photo</button>
                </>}
            </div>
            <div className={style.editLink}>
              <Link to={Path.EDIT}>Edit</Link>
            </div>
          </div>
        </div>
        <div className={style.rightBlock}>
          <Information fullName={userProfile.fullName}/>
        </div>
      </div>
    </div>
  )
}
