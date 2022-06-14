import React, { FC } from 'react'
import { PostsType } from '../../../../redux/reducers/profile-reducer/profile-reducer'
import s from './PostsItem.module.css'

type PostsItemPropsType = {
	post: PostsType
}

export const PostsItem: FC<PostsItemPropsType> = ({ post }) => {
	return (
		<div className={s.item}>
			<img src='https://cdn2.iconfinder.com/data/icons/font-awesome/1792/user-512.png' />
			{post.message}
			<div>
				<span>like</span> {post.likesCount}
			</div>
		</div>
	)
}