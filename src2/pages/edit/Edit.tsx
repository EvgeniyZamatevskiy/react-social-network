import { Line } from 'components'
import React, { FC } from 'react'
import { ReturnComponentType } from 'types'
import style from './Edit.module.scss'

export const Edit: FC = (): ReturnComponentType => {
  return (
    <div className={style.container}>

      <div className={style.titleContainer}>
        <h2 className={style.title}>Basic info</h2>
      </div>

      <div className={style.edit}>
        <div className={style.editItem}>
          Full name:
          <input className={style.editInput} type="text" defaultValue={'ZaM'}/>
        </div>


        <div className={style.editItem}>
          Looking for a job:
          <input className={style.checkbox} type="checkbox"/>
        </div>

        <div className={style.editItem}>
          My professional skills:
          <input className={style.editInput} type="text" defaultValue={'all'}/>
        </div>

        <div className={style.editItem}>
          About me:
          <input className={style.editInput} type="text" defaultValue={'Front-end developer'}/>
        </div>

        <div className={style.lineContainer}>
          <Line/>
        </div>

        <div className={style.editItem}>
          github:
          <input className={style.editInput} type="text" defaultValue={'https://www.youtube.com/'}/>
        </div>

        <div className={style.editItem}>
          vk:
          <input className={style.editInput} type="text" defaultValue={'https://www.youtube.com/'}/>
        </div>

        <div className={style.editItem}>
          facebook:
          <input className={style.editInput} type="text" defaultValue={'https://www.youtube.com/'}/>
        </div>

        <div className={style.editItem}>
          instagram:
          <input className={style.editInput} type="text" defaultValue={'https://www.youtube.com/'}/>
        </div>

        <div className={style.editItem}>
          twitter:
          <input className={style.editInput} type="text" defaultValue={'https://www.youtube.com/'}/>
        </div>

        <div className={style.editItem}>
          website:
          <input className={style.editInput} type="text" defaultValue={'https://www.youtube.com/'}/>
        </div>

        <div className={style.editItem}>
          youtube:
          <input className={style.editInput} type="text" defaultValue={'https://www.youtube.com/'}/>
        </div>

        <div className={style.editItem}>
          mainLink:
          <input className={style.editInput} type="text" defaultValue={'https://www.youtube.com/'}/>
        </div>

        <div className={style.lineContainer}>
          <Line/>
        </div>

        <button className={style.saveBtn}>Save</button>
      </div>
    </div>
  )
}
