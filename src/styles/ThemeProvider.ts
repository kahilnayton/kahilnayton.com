// @ts-ignore
import { createGlobalStyle } from 'styled-components'
import { colors } from '@/styles'
import { dimensions } from '@/styles'

export const BACKGROUND_LIGHT = 'hsl(0deg 0% 95%)'
export const BACKGROUND_LIGHT_ALT = '#dfdfdf'

export const BACKGROUND_DARK = 'hsl(220deg 100% 80%)'
export const BACKGROUND_DARK_ALT = 'blue'

export const TEXT_LIGHT = '#363537'
export const TEXT_DARK = '#FAFAFA'

export const ACCENT_LIGHT = '#8abac6'
export const PRIMARY_BLUE = '#8abac6'

export const lightTheme = {
  body: '#FFF',
  text: TEXT_LIGHT,
  background: BACKGROUND_LIGHT,
  backgroundAlt: BACKGROUND_LIGHT,
  accent: PRIMARY_BLUE,
  shadowColor: '0deg 0% 50%',
}

export const darkTheme = {
  body: '#363537',
  text: TEXT_DARK,
  background: 'black',
  accent: PRIMARY_BLUE,
  shadowColor: '220deg 60% 50%',
}

export const GlobalStyles = createGlobalStyle<{ theme: any }>`
  html {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }
  
  html,
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100%;
  }

  body {
    background-color: #fff;
    width: 100%;
    margin: 0 auto;
    font-size: 16px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    
    &.is-locked {
      overflow: hidden;
    }
    
    a {
      color: ${({ theme }) => theme.text};
    }

    * {
      box-sizing: border-box;

      &::selection {
        background: ${colors.green};
      }
    }
  }

  svg {
    display: block;
    height: 2.4rem;
    width: 2.4rem;
    fill: ${({ theme }) => theme.text};
    transition: fill 0.12s ease-in-out;
    
    &:hover {
      fill: ${({ theme }) => theme.accent};
    }
  }
  
  @media(min-width: ${dimensions.tablet}px) {
    body.is-locked {
      overflow: initial;
    }
  }
`
