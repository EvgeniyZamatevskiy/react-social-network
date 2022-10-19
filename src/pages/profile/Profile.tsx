import React, {FC, useEffect} from "react"
import {useAppDispatch} from "hooks"
import {useSelector} from "react-redux"
import {Navigate, useParams} from "react-router-dom"
import {ReturnComponentType} from "types"
import {selectAuthorizedUserId, selectIsAuth} from "store/selectors"
import {getFollowedStatus, getStatus, getUserProfile} from "store/asyncActions"
import {ProfileLeftBlock} from "./profileLeftBlock"
import {ProfileRightBlock} from "./profileRightBlock"
import {WithRequireAuth} from "hocs"
import style from "./Profile.module.scss"
import {Path} from "enums";

export const Profile: FC = WithRequireAuth((): ReturnComponentType => {

  const {userId} = useParams<{ userId: string }>()

  const dispatch = useAppDispatch()

  const isAuth = useSelector(selectIsAuth)
  const authorizedUserId = useSelector(selectAuthorizedUserId)

  const isOwner = !userId

  useEffect(() => {
    const id = isOwner ? authorizedUserId : userId

    if (isAuth) {
      dispatch(getStatus(Number(id)))
      dispatch(getFollowedStatus(Number(id)))
      dispatch(getUserProfile(Number(id)))
    }
  }, [userId])

  if (!isAuth) {
    return <Navigate to={Path.LOGIN}/>
  }

  return (
    <div className={style.profile}>
      <ProfileLeftBlock isOwner={isOwner} userId={Number(userId)}/>
      <ProfileRightBlock isOwner={isOwner}/>
    </div>
  )
})
