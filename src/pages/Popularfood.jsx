import React from 'react'
import ProductCard from "../components/UI/product-card/ProductCard.jsx";
import products from "../assets/fake-data/products.js";
import { Container,Row,Col} from "reactstrap";
import { useState,useEffect } from 'react';
import foodCategoryImg01 from "../assets/images/briyanilogo.png";
import foodCategoryImg02 from "../assets/images/icecreamlogo.png";
import foodCategoryImg03 from "../assets/images/pizza.png";
import foodCategoryImg04 from "../assets/images/milklogo.png";

import "../styles/popularfood.css";

const Popularfood = () => {
    const[category,setcategor]=useState('BRIYANI');
    const[allproducts,setproduct]=useState(products);
    useEffect(()=>
    { 
        if(category==='BRIYANI')
        {
          const newproduct=products.filter((item)=>item.category==='Briyani')
            setproduct(newproduct);
        }
            
        if(category==='ICECREAM')
        {
            const newproduct=products.filter((item)=>item.category==='Icecream')
            setproduct(newproduct);
            
        }
        if(category==='PIZZA')
        {
            const newproduct=products.filter((item)=>item.category==='Pizza')
            
            setproduct(newproduct);
            
        }
        if(category==='MILK')
        {
            const newproduct=products.filter((item)=>item.category==='Milk')
            setproduct(newproduct);
            
        }
       

    },[category])
  return (
    <Container>
    <Row>
      <Col lg="12" className="text-center">
        <h2>Popular Foods</h2>
      </Col>

      <Col lg="12">
        <div className="food__category d-flex align-items-center justify-content-center gap-2">
          <button  className={`d-flex align-items-center gap-2 ${
                    category === "BRIYANI" ? "foodBtnActive" : ""
                  } `} onClick={()=>setcategor('BRIYANI')}>
             <img src={foodCategoryImg01} alt="" />
            Briyani
          </button>
          <button   className={`d-flex align-items-center gap-2 ${
                    category === "ICECREAM" ? "foodBtnActive" : ""
                  } `} onClick={()=>setcategor('ICECREAM')}
           
          >
            <img src={foodCategoryImg02} alt="" />
            Icecream
          </button>

          <button   className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  } `} onClick={()=>setcategor('PIZZA')}
            
          >
            <img src={foodCategoryImg03} alt="" />
            Pizza
          </button>

          <button  className={`d-flex align-items-center gap-2 ${
                    category === "MILK" ? "foodBtnActive" : ""
                  } `} onClick={()=>setcategor('MILK')} 
            
          >
            <img src={foodCategoryImg04} alt="" />
            Milkshakes
          </button>
        </div>
      </Col>
      {   allproducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
         

      
       
    </Row>
  </Container>
  )
}

export default Popularfood