import React, { FC } from 'react'
import { ReturnComponentType } from 'types'
import { PostItemPropsType } from './types'
import style from './style/PostItem.module.css'

export const PostItem: FC<PostItemPropsType> = ({ post }): ReturnComponentType => {
	return (
		<div className={style.item}>
			<img src='https://cdn2.iconfinder.com/data/icons/font-awesome/1792/user-512.png' />
			{post.message}
			<div>
				<span>like</span> {post.likesCount}
			</div>
		</div>
	)
}
