import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';



const Container =  styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5), rgba(255,255,255, 0.5)
        ),
        url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    background-size: cover;
    
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    padding: 20px;
    width: 20%;
    background-color: white;
    border-radius: 5px;
    ${mobile({width : "75%"})}

`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const InputContainer = styled.div`
    flex: 1;
    min-width: 40%;
`

const Input = styled.input`
    padding: 10px;
    width: 90%;
    border : 1px solid gray;
    margin: 15px 0px;
    outline: none;

    &:focus{
        border: 1px solid teal;
    }
`

const HelperText = styled.p``

const Button = styled.button`
    width: 40%;
    border: none;
    margin-bottom: 10px;
    padding: 10px 15px;
    background-color: #0fa3a3;
    color: white;
    cursor: pointer;
    border-radius: 3px;

    &:hover{
        background-color: #0b8383;
    }
`

const Link = styled.a`
    margin: 5px 0px;
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;
    color : gray;

    &:hover{
        color : black
    }
`




export default function Login() {
  return (
    <Container>
        <Wrapper>
            <Title>LOGIN</Title> 
            <Form>
                <InputContainer>      
                    <Input type='text' placeholder='Name'/>
                    <HelperText></HelperText>
                </InputContainer>
                <InputContainer>
                    <Input type="password" placeholder='Password'/>
                    <HelperText></HelperText>
                </InputContainer>
                <Button>LOGIN</Button>
                <Link>FORGOT THE PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>

    </Container>
  )
}
