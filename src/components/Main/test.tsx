import React from 'react'

import { render, screen } from '@testing-library/react-native'

import App from '.'

describe('<App />', () => {
  it('has 1 child', () => {
    render(<App />)
    expect(screen.getByText(/Ultimate expo template!/i))
  })
})
