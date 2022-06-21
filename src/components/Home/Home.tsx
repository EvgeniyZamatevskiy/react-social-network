import { Header } from 'components/Header'
import React, { FC } from 'react'
import { ReturnComponentType } from 'types/ReturnComponentType'
import './Home.css'

type HomePropsType = {

}

export const Home: FC<HomePropsType> = ({ }): ReturnComponentType => {
	return (
		<div>
			Home
		</div>
	)
}
