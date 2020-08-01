import * as React from 'react'
import styled from '@emotion/styled'
import { theme, useIsTablet } from './style'

const Style = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  .logo {
    max-height: 80%;
    img {
      width: auto;
      height: ${theme.lineHeight(2)};
      margin-left: ${theme.lineHeight(0.5)};
      object-fit: contain;
    }
  }

  .menu {
    display: flex;
    justify-content: space-space-evenly;
    align-items: center;
  }

  .link {
    margin-right: ${theme.lineHeight()};
  }
  .link.link-main {
    font-weight: 500;
    margin-right: ${theme.lineHeight()};
    text-transform: uppercase;
    color: ${theme.color.orange};
  }
`

export const Navbar = () => {
  const isTablet = useIsTablet()
  return (
    <Style>
      <div className="logo">
        <img src="images/Logo.png"></img>
      </div>
      {isTablet ? (
        <div className="menu">
          <div className="link">Speakers</div>
          <div className="link">Companies</div>
          <div className="link">Universities</div>
          <div className="link">Mission</div>
          <div className="link link-main">Register</div>
        </div>
      ) : null}
    </Style>
  )
}
