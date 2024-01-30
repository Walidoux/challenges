import type { NextPage } from 'next'
import classNames from 'classnames'

import { Interface } from 'components/Interface/Interface'
import { Footer } from 'components/Connection/Footer'
import { Body } from 'components/Connection/Body'
import { ConnectionProvider, useConnection } from 'contexts/Connection'

import styles from '../styles/pages/connection.module.scss'

const Home: NextPage = () => {
  const { response } = useConnection()

  return (
    <ConnectionProvider>
      <main className='application'>
        <Interface className={styles.container}>
          <div className={styles.logo}>
            <img src='./images/logo.png' alt='logo' />
            <span className={styles['text-info']}>we can do it</span>
          </div>

          <Body
            classNames={{
              container: styles['inputs-container'],
              button: styles['confirm-button'],
              output: classNames(styles['output-popup'], {
                [styles.visible]: response === 'AUTH_OK'
              })
            }}
          />

          <Footer
            className={styles['links-container']}
            classNameLinks={styles.link}
          />
        </Interface>
      </main>
    </ConnectionProvider>
  )
}

export default Home
