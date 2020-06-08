import React from 'react'
import { Wrapper, Label } from './styles'

export default ({ label, children, error, relative }) => (
  <Wrapper error={error} relative={relative}>
    <Label>{label}</Label>
    {children}
  </Wrapper>
)
