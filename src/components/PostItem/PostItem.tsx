import React, { FC } from 'react'
import { PostsType } from 'store/reducers/profileReducer'
import s from './PostItem.module.css'

type PostItemPropsType = {
	post: PostsType
}

export const PostItem: FC<PostItemPropsType> = ({ post }) => {

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