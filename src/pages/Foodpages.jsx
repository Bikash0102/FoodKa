
import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";


import { Container, Row, Col } from "reactstrap";
import { useEffect } from "react";
import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";

import "../styles/all-foods.css";
import "../styles/pagination.css";

const Foodpages = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const[allproducts,setproduct]=useState(products);
 

  const searchedProduct = allproducts.filter((item) => {
    if (searchTerm === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return console.log("not found");
    }
  });

  

  const [value, setValue] = useState('BRIYANI');

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  
  
  useEffect(()=>
  { 
      if(value==='BRIYANI')
      {
        const newproduct=products.filter((item)=>item.category==='Briyani')
          setproduct(newproduct);
      }
          
      if(value==='ICECREAM')
      {
          const newproduct=products.filter((item)=>item.category==='Icecream')
          setproduct(newproduct);
          
      }
      if(value==='PIZZA')
      {
          const newproduct=products.filter((item)=>item.category==='Pizza')
          
          setproduct(newproduct);
          
      }
      if(value==='MILK')
      {
          const newproduct=products.filter((item)=>item.category==='Milk')
          setproduct(newproduct);
          
      }
     

  },[value])



  return (
    <Helmet title="All-Foods">
     

      <section>
        <Container id="mainbox">
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between ">
              <input
                  type="text"
                  placeholder="Search your food...."
                  value={searchTerm}
                  
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select value={value} onChange={handleChange} className="w-50">

                  <option value="BRIYANI">Briyani</option>
                  <option value="ICECREAM">Icecream</option>
                  <option value="PIZZA">Pizza</option>
                  <option value="MILK">Milkshakes</option>
                </select>
              </div>
            </Col>

            {searchedProduct.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <ProductCard item={item} />
              </Col>
            ))}

            
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Foodpages;