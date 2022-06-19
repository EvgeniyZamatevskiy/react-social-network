import React, { FC } from 'react'
import { AddItemForm } from 'components/common'
import { PostItem } from 'components/PostItem'
import { useSelector } from 'react-redux'
import { getPosts } from 'store/selectors'
import { ReturnComponentType } from 'types'
import { PostsListPropsType } from './types'
import { useActions } from 'store/hooks/useActions/useActions'
import style from './style/PostsList.module.css'
import { profileActionCreators } from 'store/actions'

export const PostsList: FC<PostsListPropsType> = ({ isOwner }): ReturnComponentType => {

	const { addPostAC } = useActions(profileActionCreators)

	const posts = useSelector(getPosts)

	const mappedPosts = posts.map(post => <PostItem key={post.id} post={post} />)

	const handleAddPostClick = (postTitle: string): void => {
		addPostAC(postTitle)
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
