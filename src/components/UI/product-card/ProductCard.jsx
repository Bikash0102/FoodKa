import React from "react";

import "../../../styles/product-card.css";

// import productImg from "../../../assets/images/product_2.1.jpg";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

import { Link } from "react-router-dom";

const ProductCard = (props) => {
  
  const { id, title, image01, price, extraIngredients } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
        extraIngredients
      })
    );
  };
  function Alert()
  {
    alert(`${title} is added to your cart`)
  }

  return (
    <div className="product__item d-flex flex-column justify-content-between">
      <div className="product__content">
        <img className="product__img " src={image01} alt="Pizza" />
        <h5>
          <Link to={`/pizzas/${id}`}>{title}</Link>
        </h5>
      </div>
      <div className="d-flex flex-row align-items-center justify-content-between">
        <span className="product__price mb-2">₹{price}  </span>
        <button className="addTOCART__btn" onClick={ () => {
        addToCart();
        Alert();
        }} >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
