import classNames from 'classnames'

import styles from './Button.module.scss'

export const Button: React.FC<React.ComponentPropsWithoutRef<'input'>> = (
  props
) => {
  const { value, className, style, ...rest } = props

  return (
    <input
      {...rest}
      type='submit'
      value={value}
      style={style}
      className={classNames(className, styles.button)}
    />
  )
}
