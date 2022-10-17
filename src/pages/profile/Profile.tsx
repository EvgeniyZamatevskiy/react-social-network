import React, {FC, useEffect} from "react"
import {useAppDispatch} from "hooks"
import {Path} from "enums"
import {useSelector} from "react-redux"
import {Navigate, useParams} from "react-router-dom"
import {ReturnComponentType} from "types"
import {selectAuthorizedUserId, selectIsAuth} from "store/selectors"
import {getFollowedStatus, getStatus, getUserProfile} from "store/asyncActions"
import {Information} from "./information"
import {Posts, PostsEmpty} from "components"
import {Avatar} from "./avatar"
import style from "./Profile.module.scss"

export const Profile: FC = (): ReturnComponentType => {

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
      <div className={style.container}>

        <div className={style.avatarContainer}>
          <Avatar isOwner={isOwner} userId={Number(userId)}/>
        </div>

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
      </div>
    </div>
  )
}
