import React, {useState} from 'react'
import styled from "styled-components";
import CloseIcon from '@m-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import {useSelector} from 'react-redux'

function Header() {
  const [burgerStatus, setburgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);


  return (
    <Container>
      <a href='#'>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {
          cars && cars.map((car, index) =>(
            <a href="#" key={index}>{car}</a>
          ))
        }
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
      </RightMenu>
      <CustomMenu>
        <a href="#" onClick={() => setburgerStatus(true)}>Menu</a>
      </CustomMenu>
      <BurgerNav show = {burgerStatus}>
        <CloseWrapper>
        <CustomClose onClick={() => setburgerStatus(false)}/>
        </CloseWrapper>
        {cars && cars.map((car, index)=>(
          <li key={index}><a href="#">{car}</a></li>
        ))}
       
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-In</a></li>
        <li><a href="#">Test Drive</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadster</a></li>
        <li><a href="#">Semi</a></li>
        <li><a href="#">Charging</a></li>
        <li><a href="#">Powerwall</a></li>
        <li><a href="#">Commercial Energy</a></li>
        <li><a href="#">Utilities</a></li>
        <li><a href="#">find Us</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Investor Relation</a></li>
      </BurgerNav>

    </Container>
  )
}

export default Header;

const Container = styled.div`
  min-height:60px;
  position:fixed;
  display:flex;
  background-color:transparent;
  align-items:center;
  justify-content:space-between;
  font-family:sans-serif;
  padding:0 20px;
  top:0;
  left:0;
  right:0;
  z-index:1;
`
const Menu = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  letter-spacing:0.5px;
  flex:1;
  font-size:16px;
  a{
    font-weight:500;
    text-transform:capitalize;
    padding:0 15px;
    flex-wrap:nowrap;
    
  }
  @media (max-width:768px){
    display:none;
  }


`

const RightMenu = styled.div`
a{
  font-weight:600;
  text-transform:capitalize;
  margin-right:30px;
  flex-wrap:nowrap;
}
@media (max-width:768px){
  display:none;
}
`

const CustomMenu  = styled.div`
display:flex;
align-items:center;
cursor:pointer;
a{
  font-weight:500;
  text-transform:capitalize;
  margin-right:10px;
  flex-wrap:nowrap;
}
`
const BurgerNav = styled.div`
  position:fixed;
  top:0;
  bottom:0;
  right:0;
  overflow:scroll;
  background:white;
  width:300px;
  z-index:16;
  list-style:none;
  padding:20px;
  display:flex;
  flex-direction:column;
  text-align:start;
  transform:${props=>props.show ? 'translateX(0)':'translateX(100%)'};
  transition:transform 0.2s ;
  li{
    padding:15px 0;
    // border-bottom:1px solid rgba(0 , 0, 0, 0.2);
  }
  a{
    font-weight:500;
  }
`

const CustomClose = styled(CloseIcon)`

`
const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;
`