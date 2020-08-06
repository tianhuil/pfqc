import * as React from 'react'
import styled from '@emotion/styled'
import { theme, useIsTablet } from './style'
import { eventbriteUrl } from '../lib/util'

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

const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

export const Navbar = () => {
  const isTablet = useIsTablet()
  return (
    <Style>
      <div className="logo">
        <img src="images/Logo.png"></img>
      </div>
      <div className="menu">
        {isTablet ? (
          <>
            <div className="link" onClick={() => scrollToId('event')}>
              Events
            </div>
            <div className="link" onClick={() => scrollToId('company')}>
              Companies
            </div>
            <div className="link" onClick={() => scrollToId('university')}>
              Universities
            </div>
            <div className="link" onClick={() => scrollToId('aboutus')}>
              Mission
            </div>
          </>
        ) : null}
        <a target="_blank" href={eventbriteUrl}>
          <div className="link link-main">Register</div>
        </a>
      </div>
    </Style>
  )
}
