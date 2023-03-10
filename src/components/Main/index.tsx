import { Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import * as S from './styles'

export default function App() {
  return (
    <S.Wrapper>
      <Text>Ultimate expo template!</Text>
      <StatusBar style="auto" />
    </S.Wrapper>
  )
}
