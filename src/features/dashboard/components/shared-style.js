import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  padding: ${({ spacing }) => `${spacing}rem` || '.5rem'} 0 0 0;
  max-width: 60%;
  margin: 0 auto;

  @media (max-width: 1300px) {
    max-width: 60%;
  }

  @media (max-width: 1024px) {
    max-width: 80%;
  }

  @media (max-width: 680px) {
    max-width: 90%;
  }
`

export const Center = styled.div`
  text-align: center;

  p {
    color: ${({
      theme: {
        colors: { lightGray },
      },
    }) => lightGray};
  }

  a {
    color: ${({
      theme: {
        colors: { accent },
      },
    }) => accent};
  }
`

export const Title = styled.h1`
  color: ${({
    theme: {
      colors: { darkBlack },
    },
  }) => darkBlack};
  font-size: 28pt;
  text-align: center;
`

export const CardWrapper = styled.div`
  padding: 0.5rem 0.5rem;
`
