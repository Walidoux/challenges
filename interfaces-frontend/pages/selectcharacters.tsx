import type { NextPage } from 'next'
import { List, ListItem } from '@mui/material'
import { useState } from 'react'

import { Interface } from 'components/Interface/Interface'
import { CharacterListData, charactersList } from 'utils/characterList'
import { User } from 'components/SelectCharacters/User'
import { Button } from 'components/design/Button/Button'

const SelectCharacter: NextPage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>()

  const handleListItemClick = (index: number, user: CharacterListData) => {
    return () => {
      if (user.isBlocked) return
      setSelectedIndex(index)
    }
  }

  return (
    <main className='application'>
      <Interface>
        <div className='title-container'>
          <p>Sélectionnez votre personnage</p>
        </div>

        <List component='ul' className='list-items'>
          {charactersList.map((character: CharacterListData, id: number) => {
            const selectedItem = selectedIndex === id
            return (
              <ListItem
                key={id}
                selected={selectedItem}
                className='item'
                onClick={handleListItemClick(id, character)}>
                <User
                  userName={character.userName}
                  userId={character.userId}
                  userFaction={character.userFaction}
                  userJob={character.userJob}
                  userBank={character.userBank}
                  userMoney={character.userMoney}
                  isBlocked={character.isBlocked}
                  isPremium={character.isPremium}
                  isSelected={selectedItem}
                />
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

export default SelectCharacter
