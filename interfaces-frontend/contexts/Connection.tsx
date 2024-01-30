import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

import { IDefaultValues, ResponseTypes } from 'types/connection'

const defaultValues: IDefaultValues = {
  email: '',
  password: '',
  checkbox: false,
  setEmail: () => {},
  setPassword: () => {},
  setCheckbox: () => {},
  response: 'idle',
  setResponse: () => {}
}

const ConnectionContext = createContext(defaultValues)

export const ConnectionProvider: React.FC<
  React.ComponentPropsWithoutRef<'div'>
> = ({ children }) => {
  const [email, setEmail] = useState(defaultValues.email)
  const [password, setPassword] = useState(defaultValues.password)
  const [checkbox, setCheckbox] = useState(defaultValues.checkbox)
  const [response, setResponse] = useState(defaultValues.response)

  const providerValues = useMemo(
    () => ({
      email,
      setEmail,
      password,
      setPassword,
      checkbox,
      setCheckbox,
      response,
      setResponse
    }),
    [
      email,
      setEmail,
      password,
      setPassword,
      checkbox,
      setCheckbox,
      response,
      setResponse
    ]
  )

  const handleRetrieveData = useCallback(() => {
    return (event: MessageEvent<any>) => {
      const currentMessage = event.data.message as ResponseTypes
      console.log('test: ', JSON.stringify(currentMessage))
    }
  }, [])

  useEffect(() => {
    window.addEventListener('message', handleRetrieveData)

    return () => {
      window.removeEventListener('message', handleRetrieveData)
    }
  }, [handleRetrieveData])

  return (
    <ConnectionContext.Provider value={providerValues}>
      {children}
    </ConnectionContext.Provider>
  )
}

export const useConnection = (): IDefaultValues => {
  return useContext(ConnectionContext)
}
