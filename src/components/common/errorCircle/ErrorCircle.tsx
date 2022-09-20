import React, { FC } from 'react'
import { ReturnComponentType } from 'types'
import style from './ErrorCircle.module.scss'

export const ErrorCircle: FC = (): ReturnComponentType => <span className={style.errorCircle}>!</span>
