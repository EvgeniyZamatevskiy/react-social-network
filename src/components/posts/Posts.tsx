import React, { FC } from 'react'
import { ReturnComponentType } from 'types'
import { PostsPropsType } from './types'
import { AddPost, Post, PostsEmpty } from '.'
import { useSelector } from 'react-redux'
import { selectPosts } from 'store/selectors'
import style from './Posts.module.scss'

export const Posts: FC<PostsPropsType> = (): ReturnComponentType => {

  const posts = useSelector(selectPosts)

  const postsRender = posts.map(post => <Post key={post.id} post={post}/>)

  return (
    <>
      <AddPost/>

      <div className={style.searchPosts}>
        {posts.length ? 'All posts' : 'No posts yet'}
      </div>

      {posts.length ? postsRender : <PostsEmpty/>}
    </>
  )
}
