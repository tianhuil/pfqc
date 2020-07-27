import styled from 'styled-components'

export const NavbarLayout = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;
  height: ${(p) => p.theme.lineHeight(3)};
  background: white;
`

export const SplashLayout = styled.div`
  background: green;
  z-index: 1;
  overflow: hidden;
  width: 100%;
  height: 88%;
  top: 0;
  left: 0;
  position: absolute;
`

export const BodyLayout = styled.div`
  position: absolute;
  top: 87%;
  min-height: 13%;
  width: 100%;
  z-index: 2;
  background: white;
`
