
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from "styled-components"
import { useState } from 'react';
import { sliderItems } from '../data';
import { mobile } from '../responsive';






const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${(props) => props.slideIndex * (-100)}vw)
`
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${props => props.bg}

`
const ImgConatiner = styled.div`
height: 100%;
flex: 1;
`
const Image = styled.img`
height: 80%;
padding-left: 10vw;
${mobile({ padding: "0px" })}


`
const Title = styled.h1`
    font-size: 70px;

`
const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500px;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size:20px;
    background-color: transparent;
    cursor: pointer;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;

`

const Arrow = styled.div`
    height: 50px;
    width: 50px;
    background-color: #fff7f7;;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* makes arrow to be positoned at the center vertically and ends horizontally */
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === 'left' && "10px"};
    right: ${props => props.direction === 'right' && "10px"};
    /* makes arrow to be positoned at the center vertically and ends horizontally */
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
    `

const Slider = () => {

    const [slideIndex, setslideIndex] = useState(0);

    const handleClick = (direction)=>{
        if (direction === "left"){
            setslideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else { setslideIndex(slideIndex < 2 ? slideIndex + 1 : 0)}
        
    }


    return (
        <Container>
            <Arrow direction='left' onClick={()=> handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex = {slideIndex}>
            {sliderItems.map((item)=>
            (<Slide key= {item.id} bg = {item.bg}>
                    <ImgConatiner>
                        <Image src= {item.img}  />
                    </ImgConatiner>

                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>))}
                

            </Wrapper>

            <Arrow direction='right' onClick={()=> handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider
