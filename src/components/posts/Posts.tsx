import React, { FC, memo, useCallback } from 'react'
import { AddItemForm } from 'components/common'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'store/hooks'
import { selectPosts } from 'store/selectors'
import { ReturnComponentType } from 'types/ReturnComponentType'
import style from './Posts.module.scss'
import { addPost } from 'store/slices/profile'
import { Post } from './post/Post'

type PostsPropsType = {
	image: string | undefined
}

export const Posts: FC<PostsPropsType> = memo(({ image }): ReturnComponentType => {

	const dispatch = useAppDispatch()

	const posts = useSelector(selectPosts)

	const renderPosts = posts.map(post => <Post key={post.id} post={post} image={image} />)

	const handleAddPostClick = useCallback((message: string): void => {
		dispatch(addPost(message))
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
