import { Component, onMount } from 'solid-js'
import { Application } from '@splinetool/runtime'

import styles from './styles/layouts/scene.module.scss'

import './styles/main.scss'

const App: Component = () => {
  const canvas = <canvas class={styles.scene} />

  const urlScene =
    'https://prod.spline.design/0Cmg5DTRX01dQIj6/scene.splinecode'

  onMount(async () => {
    const scene = new Application(canvas as HTMLCanvasElement)
    return await scene.load(urlScene).catch((error) => error)
  })

  return canvas
}

export default App
