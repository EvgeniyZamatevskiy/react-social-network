import React, { ChangeEvent, KeyboardEvent, FC, useState, useRef, useEffect } from 'react'
import { ReturnComponentType } from 'types'
import { EditableItemPropsType } from './types'
import { EMPTY_STRING } from 'constants/base'
import { Key } from 'enums'
import style from './EditableItem.module.scss'

export const EditableItem: FC<EditableItemPropsType> =
  ({
     currentTitle,
     handleUpdateTitle,
     isDarkTheme,
   }): ReturnComponentType => {

    const [isEditMode, setIsEditMode] = useState(false)
    const [updatedTitle, setUpdatedTitle] = useState(EMPTY_STRING)

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
      if (isEditMode) {
        inputRef.current?.select()
      }
    }, [isEditMode])

    const onUpdatedTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setUpdatedTitle(event.currentTarget.value)
    }

    const onSetIsEditModeClick = (): void => {
      setIsEditMode(true)
      setUpdatedTitle(currentTitle)
    }

    const handleUpdateTitleBlurOrKeyDown = (): void => {
      const updatedTitleTrimmed = updatedTitle.replace(/\s+/g, ' ').trim()

      if (currentTitle !== updatedTitleTrimmed) {
        handleUpdateTitle(updatedTitleTrimmed)
      }
    }

    const onSetIsEditModeBlur = (): void => {
      setIsEditMode(false)
      handleUpdateTitleBlurOrKeyDown()
    }

    const onSetIsEditModeKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
      if (event.key === Key.ENTER) {
        setIsEditMode(false)
        handleUpdateTitleBlurOrKeyDown()
        return
      }

      if (event.key === Key.ESCAPE) {
        setIsEditMode(false)
        return
      }
    }

    return (
      <>
        {isEditMode
          ? <input
            className={style.input}
            type="text"
            value={updatedTitle}
            onChange={onUpdatedTitleChange}
            onBlur={onSetIsEditModeBlur}
            onKeyDown={onSetIsEditModeKeyDown}
            ref={inputRef}
            autoFocus
          />
          : <button
            className={style.editableItemBtn}
            onClick={onSetIsEditModeClick}
          >
            {currentTitle || 'Set status'}
          </button>}
      </>
    )
  }
