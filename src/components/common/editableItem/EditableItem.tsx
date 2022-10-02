import React, { ChangeEvent, KeyboardEvent, FC, useState } from 'react'
import { ReturnComponentType } from 'types'
import { EditableItemPropsType } from './types'
import { EMPTY_STRING } from 'constants/base'
import { Key } from 'enums'
import style from './EditableItem.module.scss'

export const EditableItem: FC<EditableItemPropsType> =
  ({
     currentTitle,
     handleUpdateTitleClick
   }): ReturnComponentType => {

    const [isEditMode, setIsEditMode] = useState(false)
    const [updatedTitle, setUpdatedTitle] = useState(EMPTY_STRING)

    const onUpdatedTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setUpdatedTitle(event.currentTarget.value)
    }

    const onSetIsEditModeClick = (): void => {
      setIsEditMode(true)
      setUpdatedTitle(currentTitle)
    }

    const onSetIsEditModeBlur = (): void => {
      setIsEditMode(false)
      handleUpdateTitleClick(updatedTitle)
    }

    const onSetIsEditModeKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
      if (event.key === Key.ENTER) {
        setIsEditMode(false)
        handleUpdateTitleClick(updatedTitle)
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
            autoFocus
          />
          : <button
            className={style.editableItemBtn}
            onClick={onSetIsEditModeClick}
          >
            {currentTitle}
          </button>}
      </>
    )
  }
