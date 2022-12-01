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
  padding: 20px;
`

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  ${mobile({fontSize : "24px"})}

`

const Top = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({padding: "10px"})}
`

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props => props.type === "filled" && "none"};
  background-color: ${props => props.type === "filled" ? "black"  : "transparent"};
  color: ${props => props.type === "filled" && "white"};
`

const TopTexts = styled.div`
  align-self: center;
  ${mobile({display : "flex", flexDirection: "column  ", width: "90%", gap:"5px"})}
 
`

const TopText = styled.span`
  text-decoration: underline;
  font-size: 18px;
  cursor: pointer;
  margin: 0 10px ;
  ${mobile({fontSize: "14px", textAllign:"center"})}
`

//============================  Bottom ===================//

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection : "column"})}
`

const Info = styled.div`
  flex: 3;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
  ${mobile({flexDirection : "column"})}


`

const ProductDetail = styled.div`
  flex: 1;
  display: flex;
`

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  padding: 10px;
  ${mobile({maxWidth: "50%", maxHeight: "50%"})}
`

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${mobile({flex: "1"})}
`

const ProductName = styled.div``

const ProductId = styled.p``

const ProductColor = styled.p`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
`

const ProductSize = styled.p``

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  ${mobile({border : "1px solid lightgray"})}
`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`
const ProductAmount = styled.div`
  font-size: 20px;
  ${mobile({fontSize :"15px"})}
`

const ProductPrice = styled.div`
  font-size: 24px;
  letter-spacing: 1.5px;
  color: #4e4c4c
  ${mobile({fontSize: "15px", marginBottom: "10px"})}
`

const Hr =  styled.hr`
  background-color: #d8cdcd;
  border: none;
  height: 1px;
  
`

const Summary = styled.div`
  flex : 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`

const SummaryTitle = styled.h1`
  font-weight: 200;
`

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: ${props => props.type === 'total' && "500"};
  font-size: ${props => props.type === 'total' && "22px"};
`

const SummaryItemText = styled.span`

`

const SummaryItemPrice = styled.span``

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color : white;
  letter-spacing: 1.2px;
`


export default function Cart() {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
          <Title>YOUR BAG</Title>
       
      
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping Bag(2)</TopText>
              <TopText>Your Wishlist(0)</TopText>
            </TopTexts>
            <TopButton type='filled'>CHECKOUT NOW</TopButton>
          </Top>



          <Bottom>
            <Info>
              <Product>
                <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"  alt=""/>
                <Details>
                  <ProductName><b>Sparx Running Shoes</b></ProductName>
                  <ProductId><b>ID:</b> 04523645</ProductId>
                  <ProductColor color='black'/>
                  <ProductSize><b>Size:</b> 8</ProductSize>
                </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add/>
                    <ProductAmount>2</ProductAmount>
                    <Remove/>
                  </ProductAmountContainer>
                  <ProductPrice>₹ 499</ProductPrice>
                </PriceDetail>
              </Product>
              <Hr/>

              <Product>
                <ProductDetail>
                <Image src="https://m.media-amazon.com/images/G/31/Symbol/2020/00NEW/HexaSBC/Women/9._CB433909282_.jpg"  alt=""/>
                <Details>
                  <ProductName><b>Sparx Running Shoes</b></ProductName>
                  <ProductId><b>ID:</b> 04523645</ProductId>
                  <ProductColor color='black'/>
                  <ProductSize><b>Size:</b> 8</ProductSize>
                </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add/>
                    <ProductAmount>2</ProductAmount>
                    <Remove/>
                  </ProductAmountContainer>
                  <ProductPrice>₹ 499</ProductPrice>
                </PriceDetail>
              </Product>
              <Hr/>

              <Product>
                <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"  alt=""/>
                <Details>
                  <ProductName><b>Sparx Running Shoes</b></ProductName>
                  <ProductId><b>ID:</b> 04523645</ProductId>
                  <ProductColor color='black'/>
                  <ProductSize><b>Size:</b> 8</ProductSize>
                </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add/>
                    <ProductAmount>2</ProductAmount>
                    <Remove/>
                  </ProductAmountContainer>
                  <ProductPrice>₹ 499</ProductPrice>
                </PriceDetail>
              </Product>
            </Info>

            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>SubTotal</SummaryItemText>
                <SummaryItemPrice>₹ 998</SummaryItemPrice>
              </SummaryItem>
              
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>₹ 104</SummaryItemPrice>
              </SummaryItem>

              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice> - ₹ 104</SummaryItemPrice>
              </SummaryItem>

              <SummaryItem type = "total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>₹ 998</SummaryItemPrice>
              </SummaryItem>

              <Button>CHECKOUT NOW</Button>

            </Summary>

          </Bottom>


        </Wrapper>
        <NewsLetter/>
        <Footer/>     
    </Container>
  )
}
