import { Email, Facebook, Instagram, LocationOn, PhoneAndroid, Twitter } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Logo = styled.h1``

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;

`

const Desc = styled.p`
    margin: 20px 0px;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;

`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;

`

const ListItem = styled.li`
   width: 50%;
   margin-bottom: 10px;

`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-item: center;

`

const Payment = styled.img`

`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>DART.</Logo>
        <Desc>There are msfgbfdgbdfgbdfgbdfgbdfgbdfgbdfgbdfgbdfgbdfgbd</Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Instagram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Order Tracking</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem> <LocationOn style = {{marginRight: "10px"}}/> 622 South Ughelli Delta State</ContactItem>
        <ContactItem> <PhoneAndroid style = {{marginRight: "10px"}}/>  +13637489</ContactItem>
        <ContactItem> <Email style = {{marginRight: "10px"}}/> magii@gmail.com</ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  );
};

export default Footer;
