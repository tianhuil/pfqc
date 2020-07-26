import * as React from 'react'
import styled from 'styled-components'
import { Flex } from './Flex'

const Style = styled.div`
  width: 100%;
  height: 100px;
`

export const Navbar = () => {
  return (
    <Style>
      <Flex
        container
        flexDirection="row"
        justifyContent="flex-start"
        justify-sp
      >
        <div>Navbar</div>
        <div>Foo</div>
      </Flex>
    </Style>
  )
}
