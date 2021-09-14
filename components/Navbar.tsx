/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from 'react'
import styled from '@emotion/styled'
import { theme, useIsTablet, P } from './style'
import { eventbriteUrl } from '../lib/util'

const Style = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  .logo {
    max-height: 100%;
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
        <img src="/images/logo/full.svg"></img>
      </div>
      <div className="menu">
        {isTablet ? (
          <>
            <P className="link" onClick={() => scrollToId('event')}>
              Events
            </P>
            <P className="link" onClick={() => scrollToId('company')}>
              Companies
            </P>
            <P className="link" onClick={() => scrollToId('university')}>
              Universities
            </P>
            <P className="link" onClick={() => scrollToId('aboutus')}>
              Mission
            </P>
          </>
        ) : null}
        <a target="_blank" href={eventbriteUrl} rel="noreferrer">
          <P className="link link-main">Register</P>
        </a>
      </div>
    </Style>
  )
}
