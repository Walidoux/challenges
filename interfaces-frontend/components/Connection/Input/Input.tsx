import classNames from 'classnames'

import styles from './input.module.scss'

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  currentType: 'text' | 'password' | 'checkbox'
  icon?: JSX.Element
  label: string
  hasError?: boolean
}

export const Input: React.FC<InputProps> = (props) => {
  const { currentType, label, icon, hasError, ...rest } = props

  const inputId = `input-${currentType}`

  return (
    <>
      <div
        className={classNames(styles['input-container'], {
          [styles.checkbox]: currentType === 'checkbox'
        })}>
        <input
          {...rest}
          type={currentType}
          id={inputId}
          className={styles[inputId]}
          required={currentType !== 'checkbox'}
        />

        <label
          htmlFor={inputId}
          className={
            currentType !== 'checkbox'
              ? styles['label-container']
              : styles['label-checkbox']
          }>
          {icon != null && <span className={styles.icon}>{icon}</span>}
          <span className={styles.value}>{label}</span>
        </label>
      </div>

      {currentType !== 'checkbox' && (
        <p
          className={classNames(styles['error-message'], {
            [styles.visible]: hasError
          })}>
          {label} incorrect
        </p>
      )}
    </>
  )
}
