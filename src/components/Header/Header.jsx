import React, { useRef, } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "reactstrap";
import logo2 from "../../assets/images/res-logo1.png";

import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

import "../../styles/header.css";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foodpage",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/footer",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  let navigate = useNavigate();

  const toggleCart = (e) => {
    dispatch(cartUiActions.toggle());
    e.stopPropagation();
  };

  console.log(menuRef?.current?.classList.value);

  

  return (
    <header className="header" >
      <Container>
        <div className="nav__wrapper d-flex  align-items-center justify-content-between">
          <div className="logo" onClick={() => navigate("/home")}>
            <img src={logo2} alt="logo" />
           
          </div>
          {/* ======= menu ======= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div
              className="menu d-flex align-items-center gap-5"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="header__closeButton">
                <span onClick={toggleMenu}>
                  <i className="ri-close-fill"></i>
                </span>
              </div>
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                  onClick={toggleMenu}
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ======== nav right icons ========= */}
          <div className="nav__right d-flex align-items-center gap-4 " >
            <span className="cart__icon" >
            <i class="ri-shopping-cart-line"  onClick={ toggleCart}></i>
              <span className="cart__badge" onClick={ toggleCart}>{totalQuantity}</span>
            </span>
            <span className="user">
                <Link to='/login'><i class="ri-user-add-line"></i></Link>
            </span>
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
