import { Container, Title, Subtitle } from './styles'

export interface IHeader {
    title: string,
    subtitle: string
}

function Header({title, subtitle}: IHeader): JSX.Element {
  return (
    <Container>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}

export default Header