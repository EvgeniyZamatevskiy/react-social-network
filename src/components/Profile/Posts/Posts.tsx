import React, { FC, memo, useCallback } from 'react'
import { AddItemForm } from 'components/common'
import { useSelector } from 'react-redux'
import { addPostAC } from 'store/actions'
import { useTypedDispatch } from 'store/hooks'
import { selectPosts } from 'store/selectors'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { Post } from '../Post/Post'
import { PostsPropsType } from './types'
import style from './Posts.module.scss'

export const Posts: FC<PostsPropsType> = memo(({ image }): ReturnComponentType => {

	const dispatch = useTypedDispatch()

	const posts = useSelector(selectPosts)

	const renderPosts = posts.map(post => <Post key={post.id} post={post} image={image} />)

	const handleAddPostClick = useCallback((message: string): void => {
		dispatch(addPostAC(message))
	}, [])

	return (
		<div className={style.posts}>
			<div className={style.body}>
				<h2>{posts.length ? 'My posts' : 'There are no posts on the wall yet'}</h2>
				<AddItemForm addItem={handleAddPostClick} />
			</div>
			{renderPosts}
		</div>
	)
})
