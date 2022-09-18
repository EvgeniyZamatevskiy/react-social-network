import { Header } from 'components'
import React, { FC } from 'react'
import { ReturnComponentType } from 'types/ReturnComponentType'

export const App: FC = (): ReturnComponentType => {
  return (
    <>
      <Header />
      <div className='container'>
        <div className='app'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsum. Maiores debitis temporibus nam quis fuga odit quod sapiente suscipit ipsa, est, a, laborum nesciunt numquam labore cum perferendis facere? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem possimus, aperiam repellat doloribus inventore impedit blanditiis est. Labore, est! Maiores odit ipsum aspernatur voluptates delectus. Excepturi consectetur repudiandae nesciunt eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iure quibusdam tempore laudantium, consectetur possimus quisquam debitis libero amet quasi iusto aperiam similique ea placeat quidem rerum reiciendis molestias numquam.
        </div>
      </div>
    </>
  )
}
