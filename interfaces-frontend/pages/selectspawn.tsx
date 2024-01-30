import type { NextPage } from 'next'
import { List, ListItem } from '@mui/material'
import classNames from 'classnames'
import { useState } from 'react'

import { Interface } from 'components/Interface/Interface'
import { spawnList } from 'utils/spawnList'
import { Button } from 'components/design/Button/Button'

import styles from '../styles/pages/selectspawn.module.scss'

const SelectSpawn: NextPage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>()

  return (
    <main className='application'>
      <Interface>
        <div className='title-container'>
          <p>Sélectionnez votre spawn</p>
        </div>

        <List component='ul' className='list-items'>
          {spawnList.map((spawn: string, id: number) => {
            const selectedItem = selectedIndex === id
            return (
              <ListItem
                key={id}
                selected={selectedItem}
                onClick={() => setSelectedIndex(id)}
                className='item'>
                <p
                  className={classNames(styles['spawn-data'], {
                    [styles.selected]: selectedItem
                  })}>
                  {spawn}
                </p>
              </ListItem>
            )
          })}
        </List>

        <Button
          disabled={selectedIndex != null ? false : true}
          style={{
            width: '100%',
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8
          }}
        />
      </Interface>
    </main>
  )
}

export default SelectSpawn
