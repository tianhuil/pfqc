import * as React from 'react'
import styled from '@emotion/styled'
import { LargeButton } from './style/elements'

const Style = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('/Splash.jpg');
  background-size: cover;
  background-position: center;
`

const Position = styled.div`
  /* Control Height */
  width: 100%;
  top: calc(70%);
  position: absolute;
  /* Flex Box */
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Splash = () => {
  return (
    <Style>
      <Position>
        <LargeButton>Register Now</LargeButton>
      </Position>
    </Style>
  )
}
