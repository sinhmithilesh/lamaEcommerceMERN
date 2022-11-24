import styled from 'styled-components';

const Container = styled.div`
    height : 30px;
    background-color : teal;
    color : white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500 ;
    letter-spacing: 1px;
`

const Announcement = () => {
    return (
        <div>
            <Container>
                Super Deal! Free shipping on odders over 499. 
            </Container>
        </div>
    )
}

export default Announcement