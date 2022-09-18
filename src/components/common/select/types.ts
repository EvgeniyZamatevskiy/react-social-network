import { ChangeEvent } from 'react'

export type SelectPropsType = {
	options: string[]
	value: string
	setValue?: (value: string) => void
	onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
}
