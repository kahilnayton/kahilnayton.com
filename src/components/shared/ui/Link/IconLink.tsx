import styled from 'styled-components'

type IconLinkFields = {
  label?: string
  location?: string
  icon: string
}

export const IconLink = ({ label, location, icon }: IconLinkFields) => {
  return (
    <StyledIcon target="_blank" rel="noopener noreferrer" href={location}>
      {icon && <img src={icon} alt="link icon" />}
      <p>{label}</p>
    </StyledIcon>
  )
}

const StyledIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 3rem;
    width: 3rem;
    padding-right: 0.5rem;
  }
`
