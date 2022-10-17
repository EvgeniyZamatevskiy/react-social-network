import React, {FC} from "react"
import {ReturnComponentType} from "types"
import {UserPropsType} from "./types"
import {useAppDispatch} from "hooks"
import {follow, unfollow} from "store/asyncActions"
import {SmallLoader} from "components/common"
import {Link} from "react-router-dom"
import {Path} from "enums"
import defaultAvatar from "assets/images/defaultAvatar.png"
import style from "./User.module.scss"

export const User: FC<UserPropsType> = ({user}): ReturnComponentType => {

  const {id, followed, followedStatus, status, photos, name} = user

  const dispatch = useAppDispatch()


  const onFollowClick = (): void => {
    dispatch(follow(id))
  }

  const onUnfollowClick = (): void => {
    dispatch(unfollow(id))
  }

  return (
    <div className={style.user}>
      <div className={style.body}>
        <Link to={`${Path.PROFILE}/${id}`}>
          <img className={style.userAvatar} src={photos.small || defaultAvatar} alt="avatar"/>
        </Link>
        <div className={style.content}>
          <Link className={style.name} to={`${Path.PROFILE}/${id}`}>{name}</Link>
          <div className={style.status}>{status}</div>
        </div>
      </div>
      {followed
        ? <button
          className={style.follow}
          disabled={followedStatus.isDisabled}
          onClick={onUnfollowClick}
        >
          {followedStatus.isLoading ? <SmallLoader color={"#fff"}/> : "Unfollow"}
        </button>
        : <button
          className={style.follow}
          disabled={followedStatus.isDisabled}
          onClick={onFollowClick}
        >
          {followedStatus.isLoading ? <SmallLoader color={"#fff"}/> : "Follow"}
        </button>}
    </div>
  )
}
