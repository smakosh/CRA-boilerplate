import styled from 'styled-components/macro'

export const Grid = styled.div<{ height?: string }>`
  height: ${({ height }) => height || '100vh'};
  display: flex;
  justify-content: center;

  div {
    align-self: center;
  }
`
