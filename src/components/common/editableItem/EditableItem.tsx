import React, {FC, KeyboardEvent, useEffect, useRef, useState} from "react"
import {ReturnComponentType} from "types"
import {EditableItemPropsType} from "./types"
import {EMPTY_STRING} from "constants/base"
import {Key} from "enums"
import {Button, Input} from "components"
import style from "./EditableItem.module.scss"

export const EditableItem: FC<EditableItemPropsType> = ({currentTitle, handleUpdateTitle}): ReturnComponentType => {

  const [isEditMode, setIsEditMode] = useState(false)
  const [updatedTitle, setUpdatedTitle] = useState(EMPTY_STRING)

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isEditMode) {
      inputRef.current?.select()
    }
  }, [isEditMode])

  const onSetCurrentTitleClick = (): void => {
    setIsEditMode(true)
    setUpdatedTitle(currentTitle)
  }

  const handleUpdateTitleBlurOrKeyDown = (): void => {
    setIsEditMode(false)

    const updatedTitleTrimmed = updatedTitle.replace(/\s+/g, " ").trim()

    if (currentTitle !== updatedTitleTrimmed) {
      handleUpdateTitle(updatedTitleTrimmed)
    }
  }

  const onUpdateTitleBlur = (): void => {
    handleUpdateTitleBlurOrKeyDown()
  }

  const onUpdateTitleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === Key.ENTER) {
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
        ? <Input
          isPrimary
          value={updatedTitle}
          setValue={setUpdatedTitle}
          onBlur={onUpdateTitleBlur}
          onKeyDown={onUpdateTitleKeyDown}
          ref={inputRef}
        />
        : <Button className={style.button} onClick={onSetCurrentTitleClick}>
          {currentTitle || "Set status"}
        </Button>}
    </>
  )
}
