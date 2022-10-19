import React, {ChangeEvent, FC, useEffect, useRef} from "react"
import {ReturnComponentType} from "types"
import {DebouncedInputPropsType} from "components/common/debouncedInput/types"
import {useDebounce} from "hooks"
import style from "components/common/debouncedInput/DebouncedInput.module.scss"

export const DebouncedInput: FC<DebouncedInputPropsType> =
  ({
     value,
     setValue,
     setDebouncedValue,
     ...restProps
   }): ReturnComponentType => {

    const isMounted = useRef(false)

    const debouncedValue = useDebounce(value)

    useEffect(() => {
      if (isMounted.current) {
        setDebouncedValue(debouncedValue)
      }

      isMounted.current = true
    }, [debouncedValue])

    const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setValue(event.currentTarget.value)
    }

    return (
      <input
        className={style.input}
        onChange={onInputChange}
        {...restProps}
      />
    )
  }
