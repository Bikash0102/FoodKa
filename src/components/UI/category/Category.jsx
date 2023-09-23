import React from "react";

import {Row, Col } from "reactstrap";

import foodCategoryImg01 from "../../../assets/images/briyanilogo.png";
import foodCategoryImg02 from "../../../assets/images/icecreamlogo.png";
import foodCategoryImg03 from "../../../assets/images/pizza.png";
import foodCategoryImg04 from "../../../assets/images/milklogo.png";

import "../../../styles/category.css";

const categoryData = [
  {
    display: "Briyani",
    imgUrl: foodCategoryImg01,
  },
  {
    display: "Icecream",
    imgUrl: foodCategoryImg02,
  },

  {
    display: "Pizza",
    imgUrl: foodCategoryImg03,
  },

  {
    display: "Milkshakes",
    imgUrl: foodCategoryImg04,
  },
];

const Category = () => {
  return (
    <div className=".container-fluid p-2">
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="6" md="6" sm="7" xs="6" className="mb-4 mr-2" key={index}>
            <div className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item"  className="imagesize"/>
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Category;