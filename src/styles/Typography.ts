import { createGlobalStyle } from 'styled-components'
import { dimensions } from '@/styles'

const Typography = createGlobalStyle<{ theme: any }>`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  span,
  li,
  div,
  input,
  button {
    font-family: "Benton Sans", sans-serif;
  }
  
  h1 {
    font-size: 5.2rem;
    line-height: 1.25;
    font-weight: 400;
    
    @media(min-width: ${dimensions.tablet}px) {
      font-size: 6.6rem;
      line-height: 1.2;
    }
  }
  
  h2 {
    font-size: 4.2rem;
    line-height: 1.25;
    font-weight: 400;
    
    @media(min-width: ${dimensions.tablet}px) {
      font-size: 5.2rem;
      line-height: 1.2;
    }
  }
  
  h3 {
    font-size: 3rem;
    line-height: 1.25;
    font-weight: 400;
    
    @media(min-width: ${dimensions.tablet}px) {
      font-size: 4.2rem;
      line-height: 1.32;
    }
  }
  
  h4 {
    font-size: 2.4rem;
    line-height: 1.25;
    font-weight: 400;
    
    @media(min-width: ${dimensions.tablet}px) {
      font-size: 3rem;
    }
  }
  
  h5 {
    font-size: 1.8rem;
    line-height: 1.33;
    font-weight: 400;
    
    @media(min-width: ${dimensions.tablet}px) {
      font-size: 2.4rem;

      &.is-small {
        font-size: 1.8rem;
      }
    }
  }
  
  h6 {
    font-size: 1.4rem;
    line-height: 1.33;
    font-weight: 600;
    
    @media(min-width: ${dimensions.tablet}px) {
      font-size: 2.1rem;
      
      .is-small {
        font-size: 1.6rem;
      }
    }
  }
  
  p {
    font-size: 1.8rem;
    line-height: 1.55;
    
    & + & {
      margin-top: 2.4rem;
    }
    
    &.is-small {
      font-size: 1.6rem;  
    }
    
    &.is-large {
      font-size: 2.1rem;
    }
  }
  
  a {
    font-size: 2.4rem;
    transition: color 0.08s ease-in-out;
    color: ${({ theme }) => theme.text};
    &:hover {
      transition: color 0.08s ease-in-out;
      color: ${({ theme }) => theme.accent};
      cursor: pointer;
    }
  }
`

export default Typography
