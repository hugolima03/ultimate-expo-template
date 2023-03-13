import { StatusBar } from 'expo-status-bar'

import * as S from './styles'

export default function App() {
  return (
    <S.Wrapper>
      <StatusBar style="light" />
      <S.Title>{`Ultimate Expo\nTemplate🔥`}</S.Title>

      <S.Text>React 18</S.Text>
      <S.Text>React Native 0.71.3</S.Text>
      <S.Text>Typescript</S.Text>
      <S.Text>Expo routers</S.Text>
      <S.Text>Styled Components</S.Text>
      <S.Text>Jest / Unit tests</S.Text>
      <S.Text>Absolute imports</S.Text>
    </S.Wrapper>
  )
}
