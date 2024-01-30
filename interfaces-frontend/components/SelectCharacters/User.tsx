import { Icon } from '@iconify/react'
import classNames from 'classnames'

import { CharacterListData } from 'utils/characterList'

import styles from './user.module.scss'

interface UserProps extends CharacterListData {
  isSelected: boolean
}

export const User: React.FC<UserProps> = ({ ...props }) => {
  return (
    <div
      className={classNames(styles['user-container'], {
        [styles.selected]: props.isSelected,
        [styles.blocked]: props.isBlocked
      })}>
      <p className={styles['container-header']}>
        <span className={styles.username}>
          <Icon icon='mdi:user' fontSize={30} className={styles.usericon} />
          {props.userName}
        </span>
      </p>
      <div className={styles['container-body']}>
        <div className={styles['user-data']}>
          <span className={styles['user-data-key']}>Id:</span>
          <p className={styles['user-data-value']}>{props.userId}</p>
        </div>
        <div className={styles['user-data']}>
          <span className={styles['user-data-key']}>Faction:</span>
          <p className={styles['user-data-value']}>{props.userFaction}</p>
        </div>
        <div className={styles['user-data']}>
          <span className={styles['user-data-key']}>Job:</span>
          <p className={styles['user-data-value']}>{props.userJob}</p>
        </div>
        <div className={styles['user-data']}>
          <span className={styles['user-data-key']}>Banque:</span>
          <p
            className={classNames(
              styles['user-data-value'],
              styles.highlighted
            )}>
            {props.userBank} &#36;
          </p>
        </div>
        <div className={styles['user-data']}>
          <span className={styles['user-data-key']}>Liquide:</span>
          <p
            className={classNames(
              styles['user-data-value'],
              styles.highlighted
            )}>
            {props.userMoney} &#36;
          </p>
        </div>
      </div>
    </div>
  )
}
