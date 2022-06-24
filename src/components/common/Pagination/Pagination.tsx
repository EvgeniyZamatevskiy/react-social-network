import React, { FC } from 'react'
import style from './Pagination.module.scss'

type PaginationPropsType = {

}

export const Pagination: FC<PaginationPropsType> = ({ }) => {
	return (
		<div className={style.pagination}>
			<button>&laquo;</button>
			<button>1</button>
			<button>2</button>
			<button className={style.active}>3</button>
			<button>4</button>
			<button>5</button>
			<button>6</button>
			<button>7</button>
			<button>8</button>
			<button>9</button>
			<button>10</button>
			<button>&raquo;</button>
		</div>
	)
}
