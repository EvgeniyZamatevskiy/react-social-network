import React, { FC, memo } from 'react'
import avatar from 'assets/images/avatar.png'
import { PostPropsType } from './types'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { useTypedDispatch } from 'store/hooks/useTypedDispatch'
import { removePostAC } from 'store/profileReducer'
import style from './Post.module.scss'

export const Post: FC<PostPropsType> = memo(({ post, image }): ReturnComponentType => {

	const dispatch = useTypedDispatch()

	const userImage = image ? image : avatar

	const onRemovePostClick = (): void => {
		dispatch(removePostAC(post.id))
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
})
