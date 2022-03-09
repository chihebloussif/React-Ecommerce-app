import React from 'react';
import styled from 'styled-components';
import { login } from '../redux/apiCalls';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';


const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
), url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg");
display: flex;
align-items: center;
justify-content: center;
`;
const Wrapper = styled.div`
width: 30%;
padding: 20px;
background-color: white;
`;
const Title = styled.h1`
font-size: 24px;
font-weight: 300; 
`;
const Form = styled.form`
display: flex;
flex-direction: column;
`;
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 10px;
padding: 10px;
`;

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px 10px 10px;
background-color: teal;
color: white;
margin: 10px 10px;
cursor: pointer;
&:disabled {
    color:green;
    cursor: not-allowed;
}
`;
const Link = styled.a`
display: flex;
flex-direction: column;
margin: 10px 10px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`;

const Error = styled.span`
  color:red;
`;
const Login = () => {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const {isFetching,error} = useSelector((state)=>state.user);
    const dispatch = useDispatch() ;
    const handleClick = (e)=> {
        e.preventDefault();
        login(dispatch,{username,password});
    }
    return (
        <Container>
           <Wrapper>
                <Title>LOGIN TO YOUR ACCOUNT</Title>
                <Form>
                    <Input onChange={(e)=>setUsername(e.target.value)}
                    placeholder="username" />
                    <Input onChange={(e)=>setPassword(e.target.value)}
                     type="password"
                     placeholder="password" />
                    <Button disabled={isFetching}
                    onClick={handleClick} >LOGIN</Button>
                    {error && <Error>Oops something went wrong ...</Error> }
                    <Link>FORGET YOUR PASSWORD ?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper> 
        </Container>
    )
}

export default Login
