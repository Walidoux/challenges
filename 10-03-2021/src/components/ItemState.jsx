import { useState } from 'react'

export default function ItemState({ isState = 'All' }) {
  const [itemsStates, setItemsStates] = useState(() => {
    return JSON.parse(localStorage.getItem('itemsStates')) || []
  })

  // const itemsStates = [
  //   {
  //     state: 'All',
  //     active: true
  //   },
  //   {
  //     state: 'Active',
  //     active: false
  //   },
  //   {
  //     state: 'Completed',
  //     active: false
  //   }
  // ]

  function handleClickEvent(event) {
    event.target.classList.remove('active')
    if (event.target.classList.contains('active')) return null
    event.target.classList.add('active')
  }

  return (
    <div className='itemStates_container'>
      <ul className='itemStates_container-list'>
        {itemsStates.map((itemState, index) => {
          return (
            <li
              key={index}
              onClick={handleClickEvent}
              className={`itemStates_container-list--item ${
                itemState.active ? 'active' : ''
              }`}
            >
              {itemState.state}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
