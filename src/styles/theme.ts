const theme = {
  border: {},
  font: {
    regular: 'Inter_400Regular',
    medium: 'Inter_500Medium',
    bold: 'Inter_700Bold',
    bowlbyone: 'BowlbyOne_400Regular',
    sizes: {}
  },
  colors: {
    mainBg: '#171717',
    uiTextPrimary: '#EDEDED'
  },
  gradients: {},
  spacings: {},
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {},
  shadows: {}
} as const

export type Colors = keyof typeof theme.colors

export default theme
