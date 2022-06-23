import React, { FC } from 'react'
import style from './Post.module.scss'
import user from 'assets/images/user.png'
import { PostPropsType } from './types'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { useTypedDispatch } from 'store/hooks/useTypedDispatch'
import { removePostAC } from 'store/profileReducer/actions'

export const Post: FC<PostPropsType> = ({ post }): ReturnComponentType => {

	const dispatch = useTypedDispatch()

	const onRemovePostButtonClick = () => {
		dispatch(removePostAC(post.id))
	}

	return (
		<div className={style.myPost}>
			<div className={style.postBody}>
				<img src={user} />
				<div className={style.postMessage}>{post.message}</div>
				<div className={style.likes}>like: {post.likes}</div>
			</div>
			<button onClick={onRemovePostButtonClick}>&#10006;</button>
		</div>
	)
}
