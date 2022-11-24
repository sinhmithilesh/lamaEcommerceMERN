import React from 'react';
import Navbar from '../component/Navbar';
import styled from 'styled-components';
import Announcement from '../component/Announcement';


const Container = styled.div`
    
`

export default function ProductList() {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
    </Container>
  )
}
