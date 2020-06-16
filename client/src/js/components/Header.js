import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import cake from '../../assets/images/cake.jpg'

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
            <div>
              <div className='position-relative overflow-hidden'>
                <StyledNav className='navbar text-center navbar-expand-sm navbar-light'>
                  <Link className='logo-wrapper' to='/'>
                    <img src={cake} alt='Inspired logo' className='nav_logo_sml' />
                  </Link>
                    <div className="header-text"> Cakes </div>
                </StyledNav>
              </div>
            </div>
    );
  }
}
const StyledNav = styled.nav`
  background: #5A5F60;
  padding-top: 0;
  padding-bottom: 0;
  min-height: 54px;
  justify-content: flex-start;

  .logo-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
  }
  .header-text{
    color:white;
    font-size:30px
  }

  @media only screen and (min-width: 576px) {
    .search {
      position: relative;
      left: 113px;
    }
  }

  @media only screen and (min-width: 768px) {
    .search {
      position: relative;
      left: 153px;
    }
  }

  .placeholdericon {
    font-family: 'oepnsansregular', FontAwesome;
  }

  .nav_logo {
    width: 30px;
    transform: scaleX(0);
    opacity: 0;
    transform-origin: left;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    -o-transition: all .5s ease;
    transition: all .5s ease;
    position: absolute;
    left: 24px;
    top: 20px;
  }

  @media only screen and (min-width: 576px) {
    .nav_logo {
      transform: scaleX(1);
      opacity: 1;
    }
  }

  .nav_logo_sml {
    width: 30px;
  }
    img {
      padding: 0;
      border: none;
      height: 30px;
      width: 30px;
      object-fit: cover;
      border-radius: 50%;
    }
  }
`;
export default Header;