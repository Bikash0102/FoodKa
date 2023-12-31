import React from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Button, } from "reactstrap";


import guyImg from "../assets/images/hero1.png";
import "../styles/hero-section.css";
import Category from "../components/UI/category/Category.jsx";
import Popularfood from "./Popularfood.jsx";


const Home = () => {
  return (
    <Helmet title="Home">
     
        <div class=".container-fluid py-5  bg-danger hero-header m-1">
                <div class="container-xxl my-5 py-5 mainbox">
                    <div class="row align-items-center g-5">
                        <div class="col-lg-6 text-center text-lg-start">
                            <h1 class="display-3  animated slideInLeft">Enjoy OurDelicious Meal</h1>
                            <p class=" animated slideInLeft mb-4 pb-2">Customers hate complexity and love simplicity, viewing it as a form of good customer service. When you make things simple, you create a smooth customer experience.</p>
                            <Button  className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Book A Table</Button>
                        </div>
                        <div class="col-lg-6 text-center text-lg-end overflow-hidden">
                            <img class="img-fluid" src={ guyImg} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <section>
              <Category/>
            </section>
            <section>
             <Popularfood/>
      </section>
      
    </Helmet>
  );
};

export default Home;
