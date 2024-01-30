import type { AppProps } from 'next/app'

import { ScenarioProvider } from 'contexts/InterfaceManager'

import '../styles/main.scss'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ScenarioProvider>
      <Component {...pageProps} />
    </ScenarioProvider>
  )
}

export default MyApp
