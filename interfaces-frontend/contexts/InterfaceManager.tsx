import { useRouter } from 'next/router'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

import { InterfaceManagerTypes } from 'types/interfaceManager'

interface ScenarioDefaultValues {
  currentInterface: InterfaceManagerTypes
  setInterface: React.Dispatch<React.SetStateAction<InterfaceManagerTypes>>
}

const defaultValues: ScenarioDefaultValues = {
  currentInterface: 'idle',
  setInterface: () => {}
}

const Scenario = createContext(defaultValues)

export const ScenarioProvider: React.FC<
  React.ComponentPropsWithoutRef<'div'>
> = ({ children }) => {
  const router = useRouter()

  const [currentInterface, setInterface] = useState<InterfaceManagerTypes>(
    defaultValues.currentInterface
  )

  const defaultProviders = useMemo(
    () => ({ currentInterface, setInterface }),
    [currentInterface, setInterface]
  )

  useEffect(() => {
    router
      .push(currentInterface === 'idle' ? '/' : currentInterface)
      .catch((error) => console.log(error))
  }, [currentInterface])

  return (
    <Scenario.Provider value={defaultProviders}>{children}</Scenario.Provider>
  )
}

export const useInterface = (): ScenarioDefaultValues => {
  return useContext(Scenario)
}
