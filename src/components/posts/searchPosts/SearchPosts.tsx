import React, { ChangeEvent, FC, KeyboardEvent, useEffect, useRef } from 'react'
import { ReturnComponentType } from 'types'
import { Icon12Cancel, Icon20Search } from '@vkontakte/icons'
import { SearchPostsPropsType } from './types'
import { EMPTY_STRING } from 'constants/base'
import { Key } from 'enums'
import { useSelector } from 'react-redux'
import { selectSearchPostsMessage } from 'store/selectors'
import { useAppDispatch } from 'hooks'
import { setSearchPostsMessage } from 'store/slices/profile'
import style from './SearchPosts.module.scss'

export const SearchPosts: FC<SearchPostsPropsType> = ({
  setIsSearchPosts
}): ReturnComponentType => {
  const dispatch = useAppDispatch()

  const searchPostsMessage = useSelector(selectSearchPostsMessage)

  const searchPostsMessageRef = useRef<HTMLInputElement>(null)
  const isMounted = useRef(false)

  useEffect(() => {
    if (!searchPostsMessage.length && isMounted.current) {
      searchPostsMessageRef.current?.select()
    }
    isMounted.current = true
  }, [searchPostsMessage])

  const onSearchPostsMessageChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    dispatch(setSearchPostsMessage(event.currentTarget.value))
  }

  const handleResetSearchMessage = () => {
    dispatch(setSearchPostsMessage(EMPTY_STRING))

    if (!searchPostsMessage.length) {
      setIsSearchPosts(false)
    }
  }

  const onResetSearchPostsMessageClick = (): void => {
    handleResetSearchMessage()
  }

  const onSearchPostsMessageKeyDown = (
    event: KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === Key.ESCAPE) {
      handleResetSearchMessage()
    }
  }

  return (
    <div className={style.searchPosts}>
      <Icon20Search className={style.searchIcon} height={19} width={19} />
      <input
        className={style.searchInput}
        type='text'
        placeholder='Enter a word or phrase here...'
        value={searchPostsMessage}
        onChange={onSearchPostsMessageChange}
        ref={searchPostsMessageRef}
        autoFocus
        onKeyDown={onSearchPostsMessageKeyDown}
      />
      <Icon12Cancel
        className={style.close}
        height={16}
        width={16}
        onClick={onResetSearchPostsMessageClick}
      />
    </div>
  )
}
