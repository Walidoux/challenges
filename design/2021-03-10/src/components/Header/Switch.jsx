import IconSun from '../../assets/icon-sun.svg'
import IconMoon from '../../assets/icon-moon.svg'

export default function Switch({ switchItem = 'Moon' }) {
  const switchMode = switchItem === 'Moon' ? IconMoon : IconSun
  return <img src={switchMode} alt={switchMode} data-testid='switch-image' />
}
