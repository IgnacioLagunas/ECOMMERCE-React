import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    width: 20%;
    padding: 25px;
    background-color: white;
`
const Title = styled.div`
    font-weight: 200;
    font-size: 1.9rem;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
`
const Input = styled.input`
    flex: 1;
    min-width: 95%;
    margin: 20px 0 5px 0;
    padding: 10px;
`
const Link = styled.p`
    margin: 0.5em 0;
    font-size: 12px;;
    text-decoration: underline;
    cursor: pointer;
`
const Button = styled.button`
    padding: 1.2rem 4rem;
    border-radius: 0;
    border: none;
    background-color: teal;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
         
          <Input placeholder="Email" />
          <Input placeholder="Password" />
    
          <Link>DON´T REMEMBER YOUR PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
          <Button>LOGIN</Button>
        </Form>
        </Wrapper>
    </Container>
  )
}

export default Login