import React from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;
const Icon = styled.img`
display: flex;
margin-top: 15vh;
width: 200px;
`;
const Text = styled.h1`
display: flex;
justify-content: center;
align-items: center;
font-size: 23px;
margin-top: 50px;

`;

const Success = () => {
    
    const location = useLocation();
    console.log(location)
    return (
        <Container>
           <Icon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx6wwXILjlAknAbShbBHsd0CBgdt5_gER0Yg&usqp=CAU"/>
           <Text>Your order is being Prepared.
                 Thanks for chooisng Chahba shop.</Text>
        </Container>
    )
}

export default Success
