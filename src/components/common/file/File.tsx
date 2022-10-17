import React, {ChangeEvent, FC, useRef} from "react"
import {useAppDispatch} from "hooks"
import {setErrorMessage} from "store/slices/app"
import {ReturnComponentType} from "types"
import {updatePhoto} from "store/asyncActions"
import {FIRST_ELEMENTS_INDEX} from "constants/base"
import {FilePropsType} from "./types"
import {Button} from "components/common/button"
import style from "./File.module.scss"

const MAX_FILE_SIZE = 10000000
const ERROR_MESSAGE = "The file is too large"

export const File: FC<FilePropsType> = ({classNameButton, children}): ReturnComponentType => {

  const dispatch = useAppDispatch()

  const fileRef = useRef<HTMLInputElement>(null)

  const onSelectFileClick = (): void => fileRef && fileRef.current?.click()

  const onUploadFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.currentTarget.files && event.currentTarget.files.length) {
      const file = event.currentTarget.files[FIRST_ELEMENTS_INDEX]

      if (file.size < MAX_FILE_SIZE) {
        dispatch(updatePhoto(file))
      } else {
        dispatch(setErrorMessage(ERROR_MESSAGE))
      }
    }
  }

  return (
    <label className={style.label}>
      <input className={style.file} type="file" onChange={onUploadFileChange} ref={fileRef}/>
      <Button className={classNameButton} onClick={onSelectFileClick}>
        {children}
      </Button>
    </label>
  )
}
