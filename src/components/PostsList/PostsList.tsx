import React, { FC } from 'react'
import { AddItemForm } from 'components/common'
import { PostItem } from 'components/PostItem'
import { useSelector } from 'react-redux'
import { getPosts } from 'store/selectors'
import { ReturnComponentType } from 'types'
import { PostsListPropsType } from './types'
import style from './style/PostsList.module.css'
import { useTypedDispatch } from 'store/hooks'
import { addPostAC } from 'store/actions/profile'

export const PostsList: FC<PostsListPropsType> = ({ isOwner }): ReturnComponentType => {

	const dispatch = useTypedDispatch()

	const posts = useSelector(getPosts)

	const mappedPosts = posts.map(post => <PostItem key={post.id} post={post} />)

	const handleAddPostClick = (postTitle: string): void => {
		dispatch(addPostAC(postTitle))
	}

	return (
		<div className={style.postsBlock}>
			<h2>My posts</h2>
			{isOwner &&
				<>
					<AddItemForm onAddItemClick={handleAddPostClick} buttonTitle={'Add post'} />
					<div className={style.posts}>
						{mappedPosts}
					</div>
				</>
			}
		</div>
	)
}
