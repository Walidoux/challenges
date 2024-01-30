import axios, { AxiosResponse } from 'axios'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import React from 'react'

import { useConnection } from 'contexts/Connection'
import { useInterface } from 'contexts/InterfaceManager'
import { fadeInEffect } from 'utils/fadeInEffect'
import { ResponseTypes } from 'types/connection'

import styles from './Interface.module.scss'

declare function GetParentResourceName(): string
const isProduction = process.env.NODE_ENV === 'production'

export interface InterfaceProps {
  children: React.ReactNode
  className?: string
}

export const Interface: React.FC<InterfaceProps> = (props) => {
  const { children, className } = props

  const { setResponse } = useConnection()
  const { currentInterface, setInterface } = useInterface()
  const { email, password, checkbox } = useConnection()

  const handleResponse = (
    axiosRes: AxiosResponse<React.SetStateAction<ResponseTypes>>
  ): void => {
    setResponse(axiosRes.data)
    if (axiosRes.data === 'AUTH_OK') return setInterface('selectcharacters')
  }

  const handleRequest = async (): Promise<void> => {
    return await axios
      .post(
        `https://${
          isProduction ? GetParentResourceName() : 'localhost:3000'
        }/auth`,
        { email, password, checkbox }
      )
      .then((axiosRes) => handleResponse(axiosRes))
      .catch((error) =>
        !isProduction ? setInterface('selectcharacters') : console.log(error)
      )
  }

  const handleFormValidation = (
    event: React.FormEvent<HTMLFormElement>
  ): void | Promise<void> => {
    event.preventDefault()
    switch (currentInterface) {
      case 'idle':
        return handleRequest()
      case 'selectcharacters':
        return setInterface('selectspawn')
      default:
        return setInterface('idle')
    }
  }

  return (
    <motion.form
      method='POST'
      initial='hidden'
      animate='visible'
      variants={fadeInEffect}
      transition={{ ease: 'easeIn' }}
      className={classNames(className, styles['form-container'])}
      onSubmit={handleFormValidation}>
      {children}
    </motion.form>
  )
}
