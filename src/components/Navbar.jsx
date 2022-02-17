import React from 'react'
import styled from 'styled-components'
import { NoEncryptionTwoTone, Search } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { ShoppingCartOutlined } from '@material-ui/icons'
import {mobile} from "../responsive"
const Navbar = () => {
    
    const Container = styled.div`
        height: 60px;
        ${mobile({ height: "50px" })}
        
    `

    const Wrapper = styled.div`
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
        ${mobile({ padding: "10px 0px" })}
    `
    const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px
    `

    const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
    `

    const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center
    `
    const Center = styled.div`
    text-align: center;
    flex: 2;
    `
    const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px"})}
    `

    const Right = styled.div`
    flex: 1;
    margin-right: 25px;
    display: flex;
    justify-content: flex-end;
    ${mobile({ justifyContent: "center", })}
    align-items: center;
    `
    const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px"})}
    `
    const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
    `

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='search' />
                        <Search style={{color:"gray", fontSize: 16}} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>DART.</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGNIN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={19} color="primary">
                            <ShoppingCartOutlined color="action" />
                        </Badge>
                    </MenuItem>
                </Right>

            </Wrapper>
        </Container>
    )
}

export default Navbar


