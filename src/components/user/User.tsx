import React, {FC} from "react"
import {ReturnComponentType} from "types"
import {UserPropsType} from "./types"
import {useFollow} from "hooks"
import {Button, SmallLoader} from "components/common"
import {Link} from "react-router-dom"
import {Path} from "enums"
import defaultAvatar from "assets/images/defaultAvatar.png"
import style from "./User.module.scss"

export const User: FC<UserPropsType> = ({user}): ReturnComponentType => {

  const {id, followed, followedStatus, status, photos, name} = user

  const {follow, unfollow} = useFollow(id)

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
        ? <Button isPrimary className={style.followButton} disabled={followedStatus.isDisabled} onClick={unfollow}>
          {followedStatus.isLoading ? <SmallLoader/> : "Unfollow"}
        </Button>
        : <Button isPrimary className={style.followButton} disabled={followedStatus.isDisabled} onClick={follow}>
          {followedStatus.isLoading ? <SmallLoader/> : "Follow"}
        </Button>}
    </div>
  )
}
