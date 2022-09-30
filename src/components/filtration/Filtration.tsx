import React, { FC, useEffect, useRef, useState } from 'react'
import { ReturnComponentType } from 'types'
import { useAppDispatch, useDebounce, useTheme } from 'hooks'
import { Input } from '../common/input'
import { Icon12Dropdown, Icon20Search } from '@vkontakte/icons'
import { Select } from '../common/select'
import { selectIsLoadingTerm, selectTerm } from '../../store/selectors'
import { useSelector } from 'react-redux'
import { setIsLoadingTerm, setTerm } from 'store/slices/users'
import { SmallLoader } from '../common/loaders'
import style from './Filtration.module.scss'

export const Filtration: FC = (): ReturnComponentType => {

  const dispatch = useAppDispatch()

  const isLoadingTerm = useSelector(selectIsLoadingTerm)
  const term = useSelector(selectTerm)

  const [search, setSearch] = useState(term)

  const isMounted = useRef(false)
  const isTouchedSearch = useRef(false)

  const isDarkTheme = useTheme('dark')

  const debouncedValue = useDebounce(search, 500)

  useEffect(() => {
    if (isMounted.current) {
      dispatch(setTerm(debouncedValue))
    }

    isMounted.current = true
  }, [debouncedValue])

  useEffect(() => {
    if (isTouchedSearch.current && !isLoadingTerm) {
      dispatch(setIsLoadingTerm(true))
    }

    isTouchedSearch.current = true
  }, [search])

  return (
    <div className={`${style.filterContainer} ${isDarkTheme && style.filterContainerDark}`}>
      <div className={style.searchInputContainer}>
        <Icon20Search className={style.searchIcon}/>
        <Input placeholder="Search" className={style.searchInput} value={search} setValue={setSearch}/>
      </div>
      {isLoadingTerm ?
        <SmallLoader darkColor={'#828282'} lightColor={'#99A2AE'}/>
        : <>
          <Select value={'Params'} options={['Params', 'Params']}/>
          <Icon12Dropdown width={14} height={14} fill="#92A0B1"/>
        </>}
    </div>
  )
}
