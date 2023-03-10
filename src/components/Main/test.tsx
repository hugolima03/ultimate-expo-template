import React from 'react'

import { render, screen } from '@testing-library/react-native'

import Main from '.'

describe('<Main />', () => {
  it('has 1 child', () => {
    render(<Main />)
    expect(screen.getByText(/React 18/i))
  })
})
