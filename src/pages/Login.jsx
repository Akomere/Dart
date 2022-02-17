import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  );
`;

const FormContainer = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
 
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;
const Button = styled.button`
  border: none;
  background-color: teal;
  padding: 15px 20px;
  color: white;
  width: 40%;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;

`

const Login = () => {
  return (
    <Container>
      <Image src="https://i.ibb.co/r4BycTJ/pexels-photo-6984650.jpg" />
      <Wrapper>
        <FormContainer>
          <Title>SIGN IN</Title>
          <Form>
            <Input placeholder="username" />
            <Input placeholder="password" />
            <Button>LOGIN</Button>
            <Link>DON'T REMEMBER YOUR PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
          </Form>
        </FormContainer>
      </Wrapper>
    </Container>
  );
};

export default Login;
