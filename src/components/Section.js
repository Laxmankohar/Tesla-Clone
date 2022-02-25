import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade'

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
    return (
        <Wrap bgImage={backgroundImg} >
            <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description} </p>
            </ItemText>
            </Fade>

            <Button>
                <Fade bottom >
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    {rightBtnText &&
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    }

                </ButtonGroup>
                </Fade>

                <DownArrow src="/images/down-arrow.svg" />
            </Button>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    // border:1px solid red;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background-image:${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;
    h1{
        font-size:2.5em;
        font-family:sans-serif;
        letter-spacing:1px;
    }
    
`

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media (max-width:768px){
        flex-direction:column;
    }
`
const LeftButton = styled.div`
    background-color:rgba(23,26,32,0.8);
    backdrop-filter:blur(8px);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform:uppercase;
    font-family:sans-serif;
    font-size:12px;
    cursor:pointer;
    margin:8px;

`
const RightButton = styled(LeftButton)`
    background:white;
    color:black;
    opacity:0.65
`
const DownArrow = styled.img`
    height:40px;
    cursor:pointer;
    animation:animateDown infinite 1.5s;


`
const Button = styled.div`
`