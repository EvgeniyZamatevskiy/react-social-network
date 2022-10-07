import React, { FC } from 'react'
import { ReturnComponentType } from 'types'
import { PostsPropsType } from './types'
import style from './Posts.module.scss'

export const Posts: FC<PostsPropsType> = (): ReturnComponentType => {
  return (
    <div className={style.postsBlock}>
      posts
    </div>
  )
}
