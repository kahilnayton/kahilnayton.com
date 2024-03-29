import { keyframes } from 'styled-components'

export const sway = keyframes`
  0% {
    transform: rotate(0)
  }

  50% {
    transform: rotate(0.02turn)
  }
  
  100% {
    transform: rotate(0)
  }
`

export const swayTwo = keyframes`
0% {
transform: rotate(0)
}

50% {
transform: rotate(-0.02turn)
}

100% {
transform: rotate(0)
}
`

export const slideInTop = keyframes`
  0% {
    transform: translateY(-0.6rem);
  }
  
  100% {
    transform: translateX(0);
  }
`

export const drawIn = keyframes`
  0% {
    transform: scaleX(0.6);
  }
  
  100% {
    transform: scaleX(1);
  }
`

export const drawDown = keyframes`
  0% {
    transform: translateY(-50%) scaleX(0);
  }
  
  100% {
    transform: translateY(-50%) scaleX(1);
  }
`

export const slideUpFade = keyframes`
  0% {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
  
  100% {
    transform: translate(-50%, -200%);
    opacity: 0;
  }
`

export const lineAnimate = keyframes`
  0% {
    background-size: 100% 0.2rem;
    background-position: right 100%;
  }
  
  50% {
    background-size: 0 0.2rem;
    background-position: right 100%;
  }
  
  50.01% {
    background-position: left 100%;
  }
  
  100% {
    background-size: 100% 0.2rem;
    background-position: left 100%;
  }
`
