import { Add, Remove } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import Announcement from '../component/Announcement';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import NewsLetter from '../component/NewsLetter';
import { mobile } from '../responsive';


const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({flexDirection : "column", padding: "15px"})}

`

const ImgContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;
    ${mobile({height : "40vh"})}
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px
    ${mobile({padding : "20px 10px"})}
`

const Title = styled.h1`
    font-weight: 300;
`

const Desc = styled.p`
    margin: 20px 0px;
    font-size: 18px;
`

const Price = styled.p`
    font-weight: 300;
    font-size: 24px ;
`

const FilterContainer = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
    align-items: center;
    ${mobile({width : "100%"})}
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 300;
    margin-right: 10px;
`
const FilterColor = styled.h1`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin-right: 2px;
    cursor: pointer;
`
const FilterSize = styled.select`
    padding: 5px;
`
const FilterSizeOption = styled.option`
    cursor: pointer;
`

const AddContainer = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width : "100%"})}
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const Amount  = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    padding: 15px;
    border: 1.5px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #efe4e4;
    }
`



export default function ProductPage() {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>ONLY</Title>
                <Desc>Women Blue Straight Fit High-Rise Jeans</Desc>
                <Price>Rs 1899</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color='black'/>
                        <FilterColor color='darkblue'/>
                        <FilterColor color='grey'/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            <FilterSizeOption>XXL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>

                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>5</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>

            </InfoContainer>
        </Wrapper>
        <NewsLetter/>
        <Footer/>
    </Container>
  ) 
}
