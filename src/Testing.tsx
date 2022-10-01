import React, { ChangeEvent, FC, useState } from 'react'
import { ReturnComponentType } from 'types/ReturnComponentType'

export const Testing: FC = (): ReturnComponentType => {

  const [value, setValue] = useState('2')

  const onRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }

  return (
    <div>
      Testing:

      <input type="radio" name="find" value={value} onChange={onRadioChange}/>
    </div>
  )
}
