import { StatusBar } from 'expo-status-bar'

import { ThemeProvider } from 'styled-components/native'

import theme from '../../styles/theme'

import * as S from './styles'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <S.Wrapper>
        <StatusBar style="inverted" />
        <S.Text>Ultimate expo template!</S.Text>
      </S.Wrapper>
    </ThemeProvider>
  )
}
