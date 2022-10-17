import React, {FC} from "react"
import {ReturnComponentType} from "types"
import {UserPropsType} from "./types"
import {useAppDispatch, useTheme} from "hooks"
import {follow, unfollow} from "store/asyncActions"
import {SmallLoader} from "components/common"
import {Link} from "react-router-dom"
import {Path} from "enums"
import defaultAvatar from "assets/images/defaultAvatar.png"
import style from "./User.module.scss"
import {Theme} from "store/slices/app/types";

export const User: FC<UserPropsType> = ({user}): ReturnComponentType => {

  const {id, followed, followedStatus, status, photos, name} = user

  const dispatch = useAppDispatch()

  const isDarkTheme = useTheme(Theme.DARK)

  const onFollowClick = (): void => {
    dispatch(follow(id))
  }

  const onUnfollowClick = (): void => {
    dispatch(unfollow(id))
  }

  return (
    <div className={`${style.user} ${isDarkTheme && style.userDark}`}>
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
          className={`${style.follow} ${isDarkTheme && style.followDark}`}
          disabled={followedStatus.isDisabled}
          onClick={onUnfollowClick}
        >
          {followedStatus.isLoading ? <SmallLoader darkColor={"#000"} lightColor={"#fff"}/> : "Unfollow"}
        </button>
        : <button
          className={`${style.follow} ${isDarkTheme && style.followDark}`}
          disabled={followedStatus.isDisabled}
          onClick={onFollowClick}
        >
          {followedStatus.isLoading ? <SmallLoader darkColor={"#000"} lightColor={"#fff"}/> : "Follow"}
        </button>}
    </div>
  )
}
