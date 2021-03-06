import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) =>
    props.position === "outlined" ? "1px solid teal" : "none"};
  background-color: ${(props) =>
    props.position === "outlined" ? "white" : "teal"};
  color: ${(props) => props.position === "filled" && "white"};
`;
const TopTexts = styled.div``;

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
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductID = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 24px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 40vh;
`;
const SummaryTitle = styled.h1`
  font-weigth: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  border: none;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <Title> YOUR BAG </Title>
        <Top>
          <TopButton position="outlined">CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shoping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton position="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src="https://i.ibb.co/r4X30zh/1614188818-TD1-MTHU-SHOE-ANGLE-GLOBAL-MENS-TREE-DASHERS-THUNDER-b01b1013-cd8d-48e7-bed9-52db26515dc4.png" />
                <Details>
                  <ProductName>
                    {" "}
                    <b>Product:</b> JESSIE THUNDER{" "}
                  </ProductName>
                  <ProductID>
                    {" "}
                    <b>ID:</b> 90987676656{" "}
                  </ProductID>
                  <ProductColor color="black" />
                  <ProductSize>
                    {" "}
                    <b>Size:</b> 37.3
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <Remove />
                  <ProductAmount>2</ProductAmount>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src="https://i.ibb.co/r4X30zh/1614188818-TD1-MTHU-SHOE-ANGLE-GLOBAL-MENS-TREE-DASHERS-THUNDER-b01b1013-cd8d-48e7-bed9-52db26515dc4.png" />
                <Details>
                  <ProductName>
                    {" "}
                    <b>Product:</b> JESSIE THUNDER{" "}
                  </ProductName>
                  <ProductID>
                    {" "}
                    <b>ID:</b> 90987676656{" "}
                  </ProductID>
                  <ProductColor color="black" />
                  <ProductSize>
                    {" "}
                    <b>Size:</b> 37.3
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <Remove />
                  <ProductAmount>2</ProductAmount>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle> ORDER SUMMARY </SummaryTitle>
            <SummaryItem>
              <SummaryItemText>SubTotal</SummaryItemText>
              <SummaryItemPrice>$80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Disount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$80</SummaryItemPrice>
            </SummaryItem>
            <Button> CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
