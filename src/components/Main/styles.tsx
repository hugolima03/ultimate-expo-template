import styled, { css } from 'styled-components/native'

export const Wrapper = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.mainBg};
    align-items: center;
    justify-content: center;
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.uiTextPrimary};
    text-align: center;
    font-size: 48px;
    font-weight: 700;

    margin-bottom: 24px;
  `}
`

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.uiTextPrimary};
    font-size: 16px;
    margin-bottom: 8px;
  `}
`
