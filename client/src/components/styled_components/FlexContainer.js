import styled from 'styled-components'

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h4 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30vw;
    }
`


const RemoveLinkUnderlines = styled.a`
    a:link {
        text-decoration: none;
        color: black;
    }

    a:visited {
        text-decoration: none;
        color: black;
    }
`

export default {
    FlexContainer,
    RemoveLinkUnderlines
}