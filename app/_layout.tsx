import React from 'react'

import { ThemeProvider } from 'styled-components/native'

import theme from 'styles/theme'

import { Slot } from 'expo-router'

// Use this file to wrap your global providers.
const RootLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Slot />
    </ThemeProvider>
  )
}

export default RootLayout
