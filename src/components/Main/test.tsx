import React from 'react'

import { render, screen } from 'utils/test-utils'

import Main from '.'

describe('<Main />', () => {
  it('has 1 child', () => {
    render(<Main />)
    expect(screen.getByText(/React 18/i))
  })
})
