import { AddItemForm } from 'components/common'
import React, { FC, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTypedDispatch } from 'store/hooks/useTypedDispatch'
import { addPostAC } from 'store/profileReducer'
import { selectPosts } from 'store/selectors/profile'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { Post } from '../Post/Post'
import style from './Posts.module.scss'

export const Posts: FC = (): ReturnComponentType => {

	const dispatch = useTypedDispatch()

	const posts = useSelector(selectPosts)

	const renderPosts = posts.map(post => <Post key={post.id} post={post} />)

	const handleAddPostButtonClick = useCallback((message: string): void => {
		dispatch(addPostAC(message))
	}, [])

	return (
		<div className={style.myPosts}>
			<div className={style.body}>
				<h2>{posts.length ? 'My posts' : 'No posts'}</h2>
				<AddItemForm addItem={handleAddPostButtonClick} />
			</div>
			{renderPosts}
		</div>
	)
}
