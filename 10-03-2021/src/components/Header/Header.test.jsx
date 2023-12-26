import { render } from '@testing-library/react'
import Switch from './Switch'

import Header from './Header'

describe('<Header />', () => {
  it('should be Moon by default', () => {
    const { getByTestId } = render(<Switch />)
    expect(getByTestId('switch-image').alt).toEqual('icon-moon.svg')
  })

  it('should switch from Moon to Sun', () => {
    const { getByTestId } = render(<Header />)
    expect(getByTestId('switch-image').alt).toBe('icon-moon.svg')
    getByTestId('switch-input').click()
    expect(getByTestId('switch-image').alt).toBe('icon-sun.svg')
  })
})
