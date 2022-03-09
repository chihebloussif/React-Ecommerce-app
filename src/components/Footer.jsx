import { Email, Facebook, Instagram, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
display: flex;
`;
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;
const Logo = styled.h1`
flex: 1;
`;
const Desc = styled.p`
margin: 20px 0px;
`;
const SocialContainer = styled.div`
display: flex;
`;
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;
const Center = styled.div`
flex: 1;
padding: 20px;
`;
const Title = styled.h3`
margin-bottom:30px ;
`;
const List = styled.div`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;
const ListItem = styled.div`
width: 50%;
margin-bottom: 10px;
`;
const Right = styled.div`
flex: 1;
padding: 20px;
`;
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;
const Payment = styled.img `
width: 50%;
`;
const Footer = () => {
    return (
        <Container>
            <Left>
              <Logo>Chahba</Logo>
              <Desc>
                  there is many variations of passages of life available
                  but the mojority have suffered alternations
                  humour , or randomised word wich don't look even slight 

              </Desc> 
              <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Instagram  />
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
              </SocialContainer>     
            </Left>
            <Center>
                <Title>Useful LInks</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Wish List</ListItem>
                    <ListItem>Wish List</ListItem>
                    <ListItem>Wish List</ListItem>
                </List>
            </Center>    
            <Right>
                <Title>Contact</Title>
                    <ContactItem> <Email style={{marginRight:"10px"}}/>
                        loussif.chiheb1@gmail.com
                    </ContactItem>
                    <ContactItem><Phone style={{marginRight:"10px"}}/>
                       +216 23060400
                    </ContactItem>
                    <ContactItem><Room style={{marginRight:"10px"}}/>
                        https://facebook.com/loussifchiheb
                    </ContactItem>
                
                 <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer
