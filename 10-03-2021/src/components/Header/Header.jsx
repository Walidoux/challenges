import { useState } from 'react'
import Switch from './Switch'

export default function Header() {
  const [switchItem, setSwitchItem] = useState('Moon')

  function handleSwitch() {
    setSwitchItem((switchItem) => (switchItem === 'Moon' ? 'Sun' : 'Moon'))
  }

  return (
    <header className='header'>
      <div className='header__container'>
        <h1 className='header__container-title'>Todo</h1>
        <div className='header__container-switchField'>
          <input
            type='checkbox'
            name='switchInput'
            className='header__container-switchField--input'
            onClick={handleSwitch}
            data-testid='switch-input'
          />
          <Switch switchItem={switchItem} />
        </div>
      </div>
    </header>
  )
}
