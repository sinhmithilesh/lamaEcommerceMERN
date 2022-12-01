import React from 'react';
import Navbar from '../component/Navbar';
import styled from 'styled-components';
import Announcement from '../component/Announcement';
import Products from '../component/Products';
import NewsLetter from '../component/NewsLetter';
import Footer from '../component/Footer';
import { mobile } from '../responsive';



const Container = styled.div``

const Title = styled.h1`
    ${mobile({fontSize:"22px", padding: '10px 17px'})}
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px 30px;
    ${mobile({margin:"0px 20px", display: "flex", flexDirection : "column"})}

`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 400;
    margin-right: 10px;
    ${mobile({fontSize:"16px"})}
`


const Select = styled.select`
    margin-right: 5px;
    margin-bottom: 5px;
    padding: 3px 8px ;
    min-width: ${props => props.SelectBox === "sort" ? "50px" : "50px"}
    ${mobile({margin:"10px 0px"})}

`

const Option = styled.option``;


export default function ProductList() {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
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
