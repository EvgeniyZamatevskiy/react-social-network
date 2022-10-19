import React, {FC, useEffect, useState} from "react"
import {ReturnComponentType} from "types"
import {useAppDispatch} from "hooks"
import {Icon12Dropdown, Icon20Search} from "@vkontakte/icons"
import {selectIsLoadingTerm, selectTerm} from "store/selectors"
import {useSelector} from "react-redux"
import {setIsLoadingTerm, setTerm} from "store/slices/users"
import {ParamsPopup} from "./paramsPopup"
import {Button, DebouncedInput, SmallLoader} from "components"
import style from "./UsersSearch.module.scss"

export const UsersSearch: FC = (): ReturnComponentType => {

  const dispatch = useAppDispatch()

  const isLoadingTerm = useSelector(selectIsLoadingTerm)
  const term = useSelector(selectTerm)

  const [search, setSearch] = useState(term)
  const [isVisibleParamsPopup, setIsVisibleParamsPopup] = useState(false)

  useEffect(() => {
    if (!isLoadingTerm && search) {
      dispatch(setIsLoadingTerm(true))
    }
  }, [search])

  const onToggleVisibleParamsPopupClick = (): void => {
    setIsVisibleParamsPopup(!isVisibleParamsPopup)
  }

  const onSetIsVisibleParamsPopupMouseLeave = (): void => {
    setIsVisibleParamsPopup(false)
  }

  const setDebouncedValue = (debouncedValue: string): void => {
    dispatch(setTerm(debouncedValue))
  }

  return (
    <div className={style.usersSearch}>
      <div className={style.searchInputContainer}>
        <Icon20Search className={style.searchIcon}/>
        <DebouncedInput
          setDebouncedValue={setDebouncedValue}
          value={search}
          setValue={setSearch}
          placeholder="Search"
        />
      </div>

      {isLoadingTerm && search.length
        ? <SmallLoader color={"#99A2AE"}/>
        : <>
          <div className={style.findContainer} onMouseLeave={onSetIsVisibleParamsPopupMouseLeave}>
            <Button className={style.find} onClick={onToggleVisibleParamsPopupClick}>
              <div className={style.params}>Params</div>
              <Icon12Dropdown className={style.icon} width={14} height={14}/>
            </Button>

            {isVisibleParamsPopup && <ParamsPopup/>}
          </div>
        </>}
    </div>
  )
}
