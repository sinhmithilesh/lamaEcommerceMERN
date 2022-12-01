import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container =  styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5), rgba(255,255,255, 0.5)
        ),
        url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
    ${mobile({width : "75%"})}
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;

    /* flex-direction: column; */
`

const InputContainer = styled.div`
    flex: 1;
    min-width: 40%;
    margin: 15px 15px 0 0;
`

const Input = styled.input`
    /* flex: 1;
    min-width: 40%; */
    width: 90%;
    /* margin: 20px 12px 0 0; */
    padding: 10px;
    border : 1px solid gray;
    outline: none;


    &:focus{
        border: 1px solid teal;
    }
`


const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`


const Button = styled.button`
    width: 40%;
    border: none;
    padding: 10px 15px;
    background-color: #0fa3a3;
    color: white;
    cursor: pointer;

    &:hover{
        background-color: #0b8383;
    }
`

const HelperText = styled.p``


export default function Register() {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <InputContainer>      
                    <Input type='text' placeholder='Name'/>
                    <HelperText>hellp</HelperText>
                </InputContainer>
                <InputContainer>
                    <Input type="email" placeholder='Email'/>
                    <HelperText>hellp</HelperText>
                </InputContainer>
                <InputContainer>
                    <Input type="password" placeholder='Password'/>
                    <HelperText>hellp</HelperText>
                </InputContainer>
                <InputContainer>
                    <Input type="password" placeholder='Confirm Password'/>
                    <HelperText>hellp</HelperText>
                </InputContainer>
                <Agreement>By creating an account, I consent to the processing of my perosnal data in accordance with the 
                    <b> PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>

    </Container>
  )
}
