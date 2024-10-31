import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    display: grid;
    grid-gap: 10px;
    grid-template-rows: auto 1fr auto;
`
const Body = styled.div`
    widht: 100%;
    height: 100%;
    padding: 0 10px;
`

export {
    Container,
    Body
}