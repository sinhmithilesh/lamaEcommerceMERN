import React from 'react'
import styled from 'styled-components';
import {Facebook, Instagram, Twitter, RoomOutlined , CallOutlined, EmailOutlined} from '@mui/icons-material';

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    font-size: 25px;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
    
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style : none;
    display: flex;  
    flex-wrap : wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;    
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-bottom: 10px;

`

const Payment = styled.img`
    width : 50%;
`


export default function Footer() {
  return (
    <Container>
        <Left>
            <Logo>BITTU.</Logo>
            <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
                 totam facere est aut dolore corporis tempore excepturi reprehenderit minus 
                 quam possimus expedita modi harum ab tempora nemo! Voluptatibus veritatis cumque,
                  tempora officia nulla provident vel dolor! Sit dignissimos, debitis ea sequi 
                  tempore commodi velit quos, labore harum placeat veritatis in!
            </Desc>
            <SocialContainer>
                <SocialIcon color='3B5999'>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color='3B5999'>
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color='3B5999'>
                    <Twitter/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><RoomOutlined/>
                47/2nd street, HSR, Bengaluru 563004
            </ContactItem>
            <ContactItem>
                <CallOutlined/>
                9044100045
            </ContactItem>
            <ContactItem>
                <EmailOutlined/>
                wecare@bittu.com
            </ContactItem>
            
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>

        </Right> 
    </Container>
  )
}
