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
  width: 40%;
  padding: 20px;
  background-color: white;
 
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  border: none;
  background-color: teal;
  padding: 15px 20px;
  color: white;
  width: 40%;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Image src="https://i.ibb.co/mh4FhQ9/pexels-photo-6984661.jpg" />
      <Wrapper>
        <FormContainer>
          
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
              <Input placeholder="name" />
              <Input placeholder="last name" />
              <Input placeholder="username" />
              <Input placeholder="email" />
              <Input placeholder="password" />
              <Input placeholder="confirm password" />
              <Agreement>
                By creating an account, I consent to the processing of my
                personal data in accordance with the <b>PRIVACY POLICY</b>
              </Agreement>
              <Button>CREATE</Button>
            </Form>
         
        </FormContainer>
      </Wrapper>
    </Container>
  );
};

export default Register;
