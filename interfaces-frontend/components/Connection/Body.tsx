import { Icon } from '@iconify/react'

import { Button } from 'components/design/Button/Button'
import { Loader } from 'components/Loader'
import { useConnection } from 'contexts/Connection'

import { Input } from './Input/Input'

export interface BodyProps {
  classNames: { container: string; button: string; output: string }
}

export const Body: React.FC<BodyProps> = (props) => {
  const { classNames } = props

  const { setEmail, setPassword, setCheckbox, response } = useConnection()

  return (
    <div className={classNames.container}>
      <Input
        currentType='text'
        label='Pseudo/adresse email'
        hasError={response === 'EMAIL_WRONG' || response === 'PSEUDO_WRONG'}
        icon={<Icon icon='mdi:user' fontSize={23} color='white' />}
        onChange={(event) => setEmail(event.target.value)}
      />

      <Input
        currentType='password'
        label='Mot de passe'
        hasError={response === 'PASSWORD_WRONG'}
        icon={<Icon icon='bxs:lock-alt' fontSize={23} color='white' />}
        onChange={(event) => setPassword(event.target.value)}
      />

      <Input
        currentType='checkbox'
        label='Se souvenir de moi'
        onChange={(event) => setCheckbox(event.target.checked)}
      />

      <p className={classNames.output}>
        Connexion réussie !
        <Loader style={{ marginLeft: 10 }} color='#3fd34a' />
      </p>

      <Button
        value='Se connecter'
        style={{ borderRadius: 8, margin: '20px 0' }}
      />
    </div>
  )
}
