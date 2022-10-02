import { EditableItem, Line } from 'components'
import React, { FC, useState } from 'react'
import { ReturnComponentType } from 'types/ReturnComponentType'
import style from './Information.module.scss'

export const Information: FC = (): ReturnComponentType => {

  const [isShowDetailedInformation, setIsShowDetailedInformation] = useState(false)

  const onToggleIsShowDetailedInformationClick = (): void => {
    setIsShowDetailedInformation(!isShowDetailedInformation)
  }

  const handleUpdateStatusClick = (updatedTitle: string): void => {
    // console.log(updatedTitle)
  }

  return (
    <>
      <div className={style.container}>

        <div className={style.nameContainer}>
          <div className={style.name}>Ivan Ivanov</div>
          <span className={style.online}>online</span>
        </div>

        <div className={style.statusContainer}>
          <EditableItem currentTitle={'example'} handleUpdateTitleClick={handleUpdateStatusClick}/>
        </div>

        <Line/>
      </div>

      {/*<div className={`${style.container} ${isShowDetailedInformation && style.rewrittenContainer}`}>*/}

      {/*  <div className={style.nameContainer}>*/}
      {/*    <div className={style.name}>Ivan Ivanov</div>*/}
      {/*    <span className={style.online}>online</span>*/}
      {/*  </div>*/}

      {/*  <div className={style.statusContainer}>*/}
      {/*    <button className={style.status}>Set status</button>*/}
      {/*  </div>*/}

      {/*  <div className={style.lineContainer}>*/}
      {/*    <span className={style.line}></span>*/}
      {/*  </div>*/}

      {/*  <div className={style.jobContainer}>*/}
      {/*    <div className={style.job}>Birthday:</div>*/}
      {/*    <div className={style.isLookingJob}>September 1, 1995</div>*/}
      {/*  </div>*/}

      {/*  <div className={style.infoContainer}>*/}
      {/*    <button*/}
      {/*      className={style.infoBtn}*/}
      {/*      onClick={onToggleIsShowDetailedInformationClick}*/}
      {/*    >*/}
      {/*      {isShowDetailedInformation ? 'Hide full information' : 'Show full information'}*/}
      {/*    </button>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*{isShowDetailedInformation &&*/}
      {/*  <div className={style.detailedInformation}>*/}

      {/*    <div className={style.aboutContainer}>*/}
      {/*      <div className={style.about}>About</div>*/}
      {/*      <div className={style.aboutLine}></div>*/}
      {/*    </div>*/}

      {/*    <div className={style.aboutItem}>Full name: <span>ZaM</span></div>*/}
      {/*    <div className={style.aboutItem}>My professional skills: <span>all</span></div>*/}
      {/*    <div className={style.aboutItem}>About me:: <span>Front-end developer</span></div>*/}

      {/*    <div className={style.contactsContainer}>*/}
      {/*      <div className={style.contacts}>Contacts</div>*/}
      {/*      <div className={style.contactsLine}></div>*/}
      {/*    </div>*/}

      {/*    <div className={style.aboutItem}>Facebook:<span>https://www.youtube.com/</span></div>*/}
      {/*    <div className={style.aboutItem}>Website: <span>https://www.youtube.com/</span></div>*/}
      {/*    <div className={style.aboutItem}>Vk: <span>https://www.youtube.com/</span></div>*/}
      {/*    <div className={style.aboutItem}>Twitter: <span>https://www.youtube.com/</span></div>*/}
      {/*    <div className={style.aboutItem}>Instagram: <span>https://www.youtube.com/</span></div>*/}
      {/*    <div className={style.aboutItem}>Youtube: <span>https://www.youtube.com/</span></div>*/}
      {/*    <div className={style.aboutItem}>Github: <span>https://www.youtube.com/</span></div>*/}
      {/*    <div className={style.aboutItem}>MainLink: <span>https://www.youtube.com/</span></div>*/}
      {/*  </div>*/}
      {/*}*/}
    </>
  )
}
