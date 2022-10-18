import React, {ChangeEvent, FC, useRef} from "react"
import {ReturnComponentType} from "types"
import {FIRST_ELEMENTS_INDEX} from "constants/base"
import {FilePropsType} from "./types"
import {Button} from "components/common/button"
import style from "./File.module.scss"

const MAX_FILE_SIZE = 10000000
const ERROR_MESSAGE = "The file is too large"

export const File: FC<FilePropsType> =
  ({
     buttonClass,
     handleUpdatePhotoChange,
     handleSetErrorMessage,
     children
   }): ReturnComponentType => {

    const fileRef = useRef<HTMLInputElement>(null)

    const onSelectFileClick = (): void => fileRef && fileRef.current?.click()

    const onUploadFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
      if (event.currentTarget.files && event.currentTarget.files.length) {
        const file = event.currentTarget.files[FIRST_ELEMENTS_INDEX]

        if (file.size < MAX_FILE_SIZE) {
          handleUpdatePhotoChange(file)
        } else {
          handleSetErrorMessage(ERROR_MESSAGE)
        }
      }
    }

    return (
      <label className={style.label}>
        <input className={style.file} type="file" onChange={onUploadFileChange} ref={fileRef}/>
        <Button isPrimary className={buttonClass} onClick={onSelectFileClick}>
          {children}
        </Button>
      </label>
    )
  }
