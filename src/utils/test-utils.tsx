/* eslint-disable @typescript-eslint/no-explicit-any */
import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import theme from 'styles/theme'

declare type Options = {
  wrapper?: React.ComponentType<any>
  createNodeMock?: (element: React.ReactElement) => any
}

type CustomRenderProps = Omit<Options, 'queries'>

const customRender = (
  ui: React.ReactElement,
  { ...renderOptions }: CustomRenderProps = {}
) => render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, renderOptions)

export * from '@testing-library/react-native'
export { customRender as render }
