/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from 'react'
import styled from '@emotion/styled'
import { LargeButton, Center } from './style/elements'

const Style = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('images/Splash.jpg');
  background-size: cover;
  background-position: center;
`

const Position = styled.div`
  /* Control Height */
  width: 100%;
  top: calc(70%);
  position: absolute;
`

export const Splash = () => {
  return (
    <Style>
      <Position>
        <Center>
          <LargeButton>Register Now</LargeButton>
        </Center>
      </Position>
    </Style>
  )
}
