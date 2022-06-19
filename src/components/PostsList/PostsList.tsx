import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '../../store/hooks'
import s from './PostsList.module.css'
import { PostItem } from 'components/PostItem'
import { AddItemForm } from 'components/common'
import { getPosts } from 'store/selectors/profile'
import { profileActionCreators } from 'store/action-creators'

type PostsListPropsType = {

}

export const PostsList: FC<PostsListPropsType> = ({ }) => {

	const { addPostAC } = useActions(profileActionCreators)
	const posts = useSelector(getPosts)

	const addPostHandler = (postTitle: string) => {
		addPostAC(postTitle)
	}

	return (
		<div className={s.postsBlock}>
			<h2>My posts</h2>
			<AddItemForm addItem={addPostHandler} buttonTitle={'Add post'} />
			<div className={s.posts}>
				{posts.map(post => <PostItem key={post.id} post={post} />)}
			</div>
		</div>
	)
}