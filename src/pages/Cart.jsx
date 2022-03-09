import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { Add, Remove } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import {userRequest} from '../requestHttp';

const Container = styled.div`

`;
const Wrapper = styled.div`
padding: 40px;
`;
const Title = styled.h1`
font-weight: 300;
text-align: center;
`;
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;
const TopButton = styled.button`
padding: 10px;
font-weight: 600;
display: flex;
cursor: pointer;
border: ${(props)=>props.type === "filled" && "none"};
background-color: ${(props)=>props.type === "filled" ? "black" : "transparent"};
color: ${(props)=>props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`;
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;

`;
const Bottom = styled.div`
display: flex;
justify-content: space-between;
`;
const Info = styled.div`
flex: 3;
`;
const Product = styled.div`
display: flex;
justify-content: space-between;
padding:50px ;
`;
const ProductDetails = styled.div`
flex: 2;
display: flex;

`;
const Image = styled.img`
width: 200px;

`;
const Details = styled.div`
padding-left: 50px;
display: flex;
flex-direction: column;
justify-content: space-between;

`;
const ProductName = styled.span`

`;
const ProductId = styled.span`

`;
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props)=>props.color};
`;
const ProductSize = styled.span`

`;
const Price = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom:20px;
`;
const ProductAmount = styled.div`
font-size: 20px;
margin: 5px;
`;
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
`;
const Hr = styled.hr`
background-color:#eee;
border:none;
height: 1px;

`;

const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 35vh;
`;
const SummaryTitle = styled.h1`
font-weight: 200;
`;
const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${(props)=>props.type === "total" && "500"};
font-size: ${(props)=>props.type === "total" && "24px"};;
`;
const SummaryItemText = styled.span`
`;
const SummaryItemPrice = styled.span`
`;
const Button = styled.button`
width: 100%;
padding: 15px;
background-color: black;
color: white;
font-size: 15px;
`;

const KEY = "pk_test_51JyeGvEtLAaFiKSjoag0C5nM2HPvDyvTGdQNWJrt3HtfgRDGIrEdC0bwMz2xW2OTOQJnVJtshPW8ptkMSKVJXhYJ008NECIE7b" ;
const Cart = () => {
    const cart = useSelector(state=>state.cart);
    const navigate = useNavigate();
    const [stripeToken, setStripeToken] = useState(null);

       const onToken =(token) => {
           setStripeToken(token) ;
        };

    

    useEffect(() => {
        const makeRequest = async () => {
            try {
                 const res =  await userRequest.post('/checkout/payment',{
                     tokenId:stripeToken.id,
                     amount:cart.total*100,
                 }
                 );
                 navigate("/success", {data:res.data});
            } catch (err) {
                console.log(err);
  
            }
        };
        stripeToken && makeRequest();
         
      }, [stripeToken, navigate , cart.total]);
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
                        <TopText>Your Wishlist</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECK OUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {
                         cart.products.map((product)=>( 
                        <Product>
                            <ProductDetails>
                                <Image src={product.img}/>
                                <Details>
                                    <ProductName>
                                        <b>Product:</b> {product.title}
                                    </ProductName>
                                    <ProductId>
                                        <b>ID:</b>{product._id}
                                    </ProductId>
                                    <ProductColor color={product.color}/>
                                    <ProductSize>
                                        <b>Size:</b>{product.size}
                                    </ProductSize>
                                </Details>
                            </ProductDetails>
                            <Price>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>{product.quantity}</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$ {product.price*product.quantity}</ProductPrice>
                            </Price>
                        </Product>
                        )) } 
                        <Hr/>
                       
                                                          
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shiping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                        name="Chahba Shop"
                        image="data:image/png;base64,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"
                        billingAddress
                        shippingAddress
                        description={`your total is $${cart.total}`}
                        amount={cart.total*100}
                        token={onToken}
                        stripeKey={KEY}
                        >
                        <Button>CHECKOUT NOW</Button>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart
