import React from 'react';
import styled from 'styled-components';
import Announcement from '../component/Announcement';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import NewsLetter from '../component/NewsLetter';

const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`

const ImgContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px
`

const Title = styled.h1`
    font-weight: 300;
`

const Desc = styled.p`
    margin: 20px 0px;
    font-size: 18px;
`

const Price = styled.p`
    font-weight: 400;
    font-size: 18px ;
`

const FilterContainer = styled.div``
const Filter = styled.div``
const FilterTitle = styled.div``
const FilterColor = styled.h1``
const FilterSize = styled.div``
const FilterSizeOption = styled.div``


export default function ProductPage() {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
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
            </InfoContainer>
        </Wrapper>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}
