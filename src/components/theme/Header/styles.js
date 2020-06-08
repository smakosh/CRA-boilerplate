import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  padding: 1rem 0;

  h2 {
    margin: unset;
    color: ${({
      theme: {
        colors: { darkBlack },
      },
    }) => darkBlack};
  }
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    text-decoration: unset;

    &:first-child {
      margin-right: 1rem;
      color: ${({
        theme: {
          colors: { darkBlack },
        },
      }) => darkBlack};
    }
  }
`
