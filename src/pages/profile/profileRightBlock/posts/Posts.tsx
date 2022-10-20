import React, {FC, useEffect, useRef, useState} from "react"
import {ReturnComponentType} from "types"
import {PostsPropsType} from "./types"
import {useSelector} from "react-redux"
import {selectPosts, selectSearchPostsMessage} from "store/selectors"
import {Icon20Search} from "@vkontakte/icons"
import {EMPTY_STRING} from "constants/base"
import {AddPost, Post, PostsEmpty, SearchPosts} from "."
import {LocalStorageKey} from "enums"
import {PostType} from "store/slices/profile/types"
import style from "./Posts.module.scss"
import {setDataToLocalStorage} from "services"

export const Posts: FC<PostsPropsType> = (): ReturnComponentType => {

  const posts = useSelector(selectPosts)
  const searchPostsMessage = useSelector(selectSearchPostsMessage)

  const [isSearchPosts, setIsSearchPosts] = useState(false)

  const isMounted = useRef(false)

  const postsRender = posts
    .filter(post => post.message.toLowerCase().includes(searchPostsMessage.toLowerCase()))
    .map(post => <Post key={post.id} post={post}/>)

  useEffect(() => {
    if (isMounted.current) {
      setDataToLocalStorage<PostType[]>(LocalStorageKey.POSTS, posts)
    }

    isMounted.current = true
  }, [posts])

  const onSetIsSearchPostsClick = (): void => {
    setIsSearchPosts(true)
  }

  return (
    <div className={style.posts}>
      <AddPost/>

      {isSearchPosts
        ? <SearchPosts setIsSearchPosts={setIsSearchPosts}/>
        : <div className={style.allPosts}>
          {posts.length ? "All posts" : "No posts yet"}
          {posts.length
            ? <Icon20Search className={style.icon} height={20} width={20} onClick={onSetIsSearchPostsClick}/>
            : EMPTY_STRING}
        </div>
      }

      {posts.length ? postsRender : <PostsEmpty/>}
    </div>
  )
}
