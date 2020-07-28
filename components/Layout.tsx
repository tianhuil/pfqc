import styled from 'styled-components'

export const NavbarLayout = styled.div`
  width: 100%;
  z-index: 2;
  height: ${(p) => p.theme.lineHeight(3)};
  background: white;
`

export const SplashLayout = styled.div`
  background: #ccc;
  overflow: hidden;
  width: calc(100vw - (100vw - 100%));
  height: 88vh;
  top: 0;
  left: 0;
  position: relative;
`

export const BodyLayout = styled.div`
  min-height: 13%;
  width: 100%;
  background: white;
`
