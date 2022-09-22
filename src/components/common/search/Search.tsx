import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import { ReturnComponentType } from 'types'
import { useDebounce } from 'hooks'
import { EMPTY_STRING } from 'constants/base'
import { SearchPropsType } from './types'
import { Button } from '../button'
import { Input } from '../input'
import search from 'assets/icons/search.svg'
import cross from 'assets/icons/cross.svg'
import style from './Search.module.scss'

export const Search: FC<SearchPropsType> =
	({
		searchValue,
		isDisabled,
		setIsDisabled,
		handleSetSearchValueChange,
		handleResetSearchValueClick
	}): ReturnComponentType => {

		const [value, setValue] = useState(searchValue)

		const debouncedValue = useDebounce(value, 700)

		const inputRef = useRef<HTMLInputElement>(null)
		const isMounted = useRef(false)

		useEffect(() => {
			if (isMounted.current) {
				handleSetSearchValueChange(debouncedValue)
				setIsDisabled && setIsDisabled(false)
			}

			isMounted.current = true
		}, [debouncedValue])

		const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
			const currentValue = event.currentTarget.value
			setValue(currentValue)

			if (currentValue && !isDisabled) {
				setIsDisabled && setIsDisabled(true)
			}
		}

		const onResetSearchValueClick = (): void => {
			setValue(EMPTY_STRING)
			handleResetSearchValueClick(EMPTY_STRING)
			inputRef.current?.focus()
		}

		return (
			<div className={style.container}>
				<img className={style.searchIcon} src={search} />
				<Input
					className={style.searchInput}
					placeholder='Provide your text'
					value={value}
					onChange={onInputChange}
					ref={inputRef} />
				{searchValue &&
					<Button
						className={style.resetSearchValueBtn}
						onClick={onResetSearchValueClick}
					// disabled={isDisabled}
					>
						<img className={style.crossIcon} src={cross} alt='cross' />
					</Button>}
			</div>
		)
	}
