import styled from 'styled-components'

export const NavbarLayout = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;
  height: ${(p) => p.theme.lineHeight(3)};
  background: white;
`

export const SplashLayout = styled.div`
  width: 100%;
  height: 88%;
  top: 0;
  left: 0;
  position: fixed !important;
`

export const BodyLayout = styled.div`
  position: absolute;
  width: 100%;
  top: 87%;
  z-index: 2;
  left: 0;
  background: white;
`
