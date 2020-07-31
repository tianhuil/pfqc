import styled from '@emotion/styled'
import { theme } from './style'

export const Banner = styled.div<{ src: string }>`
  background: url(${(p) => '/images/banner/' + p.src});
  background-size: cover;
  background-position: left center;
  height: 35vw;
  margin: ${theme.lineHeight(3)} 0;
  ${theme.mediaQuery.tablet} {
    margin: ${theme.lineHeight(4)} 0;
  }
`
