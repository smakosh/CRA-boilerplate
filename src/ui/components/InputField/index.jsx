import React from 'react'
import { Wrapper, Label } from './styles'

const InputField = ({ label, children, error, relative }) => (
  <Wrapper error={error} relative={relative}>
    <Label>{label}</Label>
    {children}
  </Wrapper>
)

export default InputField
