import React, { FC } from 'react'
import { ReturnComponentType } from 'types/ReturnComponentType'
import { Button } from '../components'
import { useTheme } from '../hooks'
import style from './Testing.module.scss'

export const Testing: FC = (): ReturnComponentType => {

  const isDarkTheme = useTheme('dark')

  return (
    <div className={style.testing}>
      <Button
        isDarkTheme={isDarkTheme}
        isPrimary
      >
        Save
      </Button>
    </div>
  )
}
