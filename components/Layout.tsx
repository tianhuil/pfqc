import styled from '@emotion/styled'
import { theme } from './style'

export const NavbarLayout = styled.div`
  width: 100%;
  z-index: 2;
  height: ${theme.lineHeight(3)};
  background: white;
`

export const SplashLayout = styled.div`
  background: #ccc;
  z-index: 1;
  overflow: hidden;
  width: 100%;
  height: 88vh;
  top: 0;
  left: 0;
`

export const BodyLayout = styled.div`
  min-height: 13vh;
  z-index: 2;
  width: 100%;
  background: white;
`
