import React from 'react'
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
    height: 64vh;
    background-color: #fcf5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`

const Desc = styled.div`
    font-size: 24px;
    font-weight : 400;
    margin-bottom: 20px;
`

const InputContainer = styled.div`
    width: 33%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    background-color: white;
    cursor: pointer;
`
const Input = styled.input`
    border: none;
    flex: 10 ;
    outline: none;
    font-size: 16px;
    padding-left: 5px;
`
const Button = styled.button`
    flex : 1;
    border: none;
    background-color: #4cb1b1;
    color: #ffffffd0;
    cursor: pointer;

`


export default function NewsLetter() {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite products</Desc>
        <InputContainer>
            <Input placeholder='Your email '/>
            <Button>
                <SendIcon/>
            </Button>
        </InputContainer>
    </Container>
  )
}
