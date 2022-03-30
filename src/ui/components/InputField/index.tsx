import { ReactNode } from 'react'
import { Wrapper, Label } from './styles'

type InputFieldProps = {
  children: ReactNode
  label?: string
  error?: boolean
  relative?: boolean
}

const InputField = ({ label, children, error, relative }: InputFieldProps) => (
  <Wrapper error={error} relative={relative}>
    {label && <Label>{label}</Label>}
    {children}
  </Wrapper>
)

export default InputField
