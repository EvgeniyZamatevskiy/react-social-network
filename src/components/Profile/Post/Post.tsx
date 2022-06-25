import React, { FC, memo } from 'react'
import style from './Post.module.scss'
import avatar from 'assets/images/avatar.png'
import { PostPropsType } from './types'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { useTypedDispatch } from 'store/hooks/useTypedDispatch'
import { removePostAC } from 'store/profileReducer'

export const Post: FC<PostPropsType> = memo(({ post, image }): ReturnComponentType => {

	const dispatch = useTypedDispatch()

	const userImage = image ? image : avatar

	const onRemovePostButtonClick = (): void => {
		dispatch(removePostAC(post.id))
	}

	return (
		<div className={style.myPost}>
			<div className={style.postBody}>
				<img src={userImage} />
				<div className={style.postMessage}>{post.message}</div>
				<div className={style.likes}>like: {post.likes}</div>
			</div>
			<button onClick={onRemovePostButtonClick}>&#10006;</button>
		</div>
	)
})
