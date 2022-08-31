import React, { FC } from 'react'
import { useAppDispatch } from 'hooks'
import { ReturnComponentType } from 'types/ReturnComponentType'
import avatar from 'assets/images/avatar.png'
import style from './Post.module.scss'
import { removePost } from 'store/slices/profile'
import { PostPropsType } from './types'

export const Post: FC<PostPropsType> = ({ post, image }): ReturnComponentType => {

	const dispatch = useAppDispatch()

	const userImage = image ? image : avatar

	const onRemovePostClick = (): void => {
		dispatch(removePost(post.id))
	}

	return (
		<div className={style.post}>
			<div className={style.postBody}>
				<img src={userImage} />
				<div className={style.message}>{post.message}</div>
				<div className={style.like}>like: {post.like}</div>
			</div>
			<button onClick={onRemovePostClick}>&#10006;</button>
		</div>
	)
}
