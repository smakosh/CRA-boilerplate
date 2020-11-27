import styled from 'styled-components/macro'

interface ButtonProps {
  wide?: boolean
  state?: string
  variant: string
  size: string
}

export default styled.button<ButtonProps>`
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 0.3rem;
  cursor: pointer;
  font-size: 12pt;
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
  }

  ${({ wide }) =>
    wide &&
    `
      width: 100%;
      text-align: center;
	`}

  ${({
    variant,
    state,
    theme: {
      colors: { accent, white, lightAccent, stateColors },
    },
  }) => {
    switch (variant) {
      case 'primary':
        return `
					color: ${white};
					background: ${state ? stateColors[state] : accent};
					border: 1px solid transparent;

					&:hover {
						background: ${state ? stateColors[state] : lightAccent};
					}
				`
      case 'secondary':
        return `
					color: ${state ? stateColors[state] : accent};
					background: ${white};
					border: ${state ? stateColors[state] : accent} 1px solid;

					&:hover {
						background: ${state ? stateColors[state] : accent};
						color: ${white};
						border-color: ${state ? stateColors[state] : accent} 1px solid;
					}
				`
      default:
        return null
    }
  }}

	${({ size }) => {
    switch (size) {
      case 'large':
        return `
					padding: 0.7rem 2rem;
				`
      case 'medium':
        return `
					padding: 0.4rem 1.8rem;
					font-size: 10pt;
				`
      case 'small':
        return `
					padding: 0.3rem 1.6rem;
					font-size: 8pt;
				`
      default:
        return null
    }
  }}
	
	&:disabled {
    background-color: #cccccc;
    color: #666666;
  }
`
