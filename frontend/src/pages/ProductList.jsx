import React from 'react';
import Navbar from '../component/Navbar';
import styled from 'styled-components';
import Announcement from '../component/Announcement';
import Products from '../component/Products';
import NewsLetter from '../component/NewsLetter';
import Footer from '../component/Footer';


const Container = styled.div``
const Title = styled.h1``
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px 30px;
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 400;
    margin-right: 10px;
`


const Select = styled.select`
    margin-right: 5px;
    padding: 3px 8px ;
    min-width: ${props => props.SelectBox === "sort" ? "50px" : "50px"}
`

const Option = styled.option``;


export default function ProductList() {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter><FilterText>Filter Products</FilterText>
            <Select>
                <Option disabled selected>Color</Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
                <Option>Green</Option>
            </Select>
            <Select>
                <Option disabled selected>Size</Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
                <Option>XXL</Option>
            </Select>
            </Filter>
           
            <Filter><FilterText>Sort Products</FilterText>
                <Select SelectBox="sort">
                    <Option selected>Newest</Option>
                    <Option>Price (Low to High)</Option>
                    <Option>Price (High to Low)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}
