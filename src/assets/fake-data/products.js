// all images imported from images directory
// import product_01_image_01 from "../images/product_01.jpg";
// import product_01_image_02 from "../images/product_01.1.jpg";
// import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import briyani1 from "../images/briyani1.jpg";
import briyan2 from "../images/briyani2.jpg";
import briyan3 from "../images/briyani3.jpg";
import briyan4 from "../images/briyani4.jpg";
import briyan5 from "../images/briyani5.jpg";
import briyan6 from "../images/briyani6.jpg";
import briyan7 from "../images/briyani7.jpg";

import ice1 from "../images/ice1.jpg";
import ice2 from "../images/ice2.jpg";
import ice3 from "../images/ice3.jpg";
import ice4 from "../images/ice4.jpg";
import ice5 from "../images/ice5.jpg";
import ice6 from "../images/ice6.jpg";
import ice7 from "../images/ice7.jpg";
import ice8 from "../images/ice8.jpg";

import milk1 from "../images/milk1.jpg";
import milk2 from "../images/milk2.jpg";
import milk3 from "../images/milk3.jpg";
import milk4 from "../images/milk4.jpg";
import milk5 from "../images/milk5.jpg";
import milk6 from "../images/milk6.jpg";
import milk7 from "../images/milk7.jpg";


const products = [
  {
    id: "01",
    title: "Seafood Pizza",
    price: 115.0,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Pizza",
    
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "02",
    title: "Vegetarian Pizza",
    price: 115.0,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Pizza",
    
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "03",
    title: "Double Cheese Margherita",
    price: 110.0,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Pizza",
    
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "04",
    title: "Maxican Green Wave",
    price: 110.0,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Pizza",
    
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "05",
   
    title: "Thin Cheese Pizza",
    price: 110.0,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Pizza",
    
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "06",
    
    title: "Pizza With Mushroom",
    price: 110.0,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: "Pizza",
    
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "07",
    title: "Dum biryani ",
    price: 250,
    image01: briyani1,
   
    category: "Briyani",

    desc: "Medium Spicy | With Bone | Comes with Served with Raita | Serves 1 | Slow-cooked, flavorful Biryani with tender meat, fragrant rice, and aromatic spices. Serves 1-2",
    
  },


  {
    id: "08",
    title: "Special chicken biryani ",
    price:330,
    image01:briyan2,
   
    category: "Briyani",

    desc: "Medium Spicy | With Bone | Comes with Served with bone | Serves 1",
  },
  {
    id: "09",
    title: "Mughlai biryani",
    price:330,
    image01:briyan3,
   
    category: "Briyani",

    desc: "A rich and flavorful biryani with tender pieces of meat. Serves 1",
  },
  {
    id: "10",
    title: "Chicken fry piece biryani",
    price:275,
    image01:briyan4,
   
    category: "Briyani",

    desc: "Medium Spicy | With Bone | Comes with Served with Raita | Serves 1 | Tender chicken fried to perfection and layered with aromatic rice - a non-veg Biryani like no other! Serves 1-2",
  },
  {
    id: "11",
    title: "Mutton biryani",
    price:300,
    image01:briyan5,
   
    category: "Briyani",

    desc: "Succulent tender pieces of meat nestled in delectably spiced rice. Serves 1-2",
  },
  {
    id: "12",
    title: "Egg biryani",
    price:200,
    image01:briyan6,
   
    category: "Briyani",

    desc: "Healthy yet wholesome boiled eggs covered in flavor-packed masala and slow cooked rice.",
  },
  {
    id: "13",
    title: "Chilli chicken biryani",
    price:300,
    image01:briyan7,
   
    category: "Briyani",

    desc: "Medium Spicy | Comes with Served with Raita | Serves 1 | A savory, comforting fried rice with a medley of vegetables. Serves 1-2",
  },
  {
    id: "14",
    title: "Sitaphal Ice Cream [mini Pack]",
    price:80,
    image01:ice1,
   
    category: "Icecream",

    desc: "The mouth watering taste of sitaphal meets the creamy goodness of our pure milk icecream. (contains 80gms & serves 1 scoop)",
  },
  {
    id: "15",
    title: "Jack Fruit Ice Cream [mini Pack]",
    price:90,
    image01:ice2,
   
    category: "Icecream",

    desc: "Taste the aromatic sweetness of jackfruit in every bite. (contains 80gms & serves 1 scoop)",
  },
  {
    id: "16",
    title: "Tender Coconut Ice Cream[mini Pack]",
    price:80,
    image01:ice3,
   
    category: "Icecream",

    desc: "Experience the refreshing and fresh bites of tender coconut in every scoop. (contains 80gms & serves 1 scoop)",
  },
  {
    id: "17",
    title: "Guava Ice Cream[mini Pack]",
    price:80,
    image01:ice4,
   
    category: "Icecream",

    desc: "Made with guava chunks & milk. A flavour for all seasons & taste buds. (contains 80gms & serves 1 scoop)",
  },
  {
    id: "18",
    title: "Black Current[mini Pack]",
    price:80,
    image01:ice5,
   
    category: "Icecream",

    desc: "Rich & creamy black currant icecream. Made with blackcurrant & milk. (contains 80gms & serves 1 scoop)",
  },
  {
    id: "19",
    title: "Kaju Kismiss Ice Cream[mini Pack]",
    price:80,
    image01:ice6,
   
    category: "Icecream",

    desc: "Dive into the premium taste of kaju kismiss ice cream in every scoop. (contains 80gms & serves 1 scoop)",
  },
  {
    id: "20",
    title: "Kiwi Ice Cream[mini Pack]",
    price:80,
    image01:ice7,
   
    category: "Icecream",

    desc: "Taste the kiwi based icecream made with kiwi pulp. Try it out today. (contains 80gms & serves 1 scoop)",
  },
  {
    id: "21",
    title: "Gulkhand Ice Cream[mini Pack]",
    price:80,
    image01:ice8,
   
    category: "Icecream",

    desc: "A sweet treat made with combining of gulkand & milk (contains 80gms & serves 1 scoop)",
  },
  {
    id: "22",
    title: "Oreo Nutella Milkshake",
    price:219,
    image01:milk1,
   
    category: "Milk",

    desc: "A crunchy and creamy milkshake made by blending wholesome milk with delectable nutella and refreshing ice cream.",
  },
  {
    id: "23",
    title: "Brownie Nuts Thick Shake",
    price:234,
    image01:milk2,
   
    category: "Milk",

    desc: "A crunchy and creamy milkshake made by blending wholesome milk with delectable brownies, nuts and refreshing ice cream.",
  },
  {
    id: "24",
    title: "Brownie Choco Chips Thick Shake",
    price:234,
    image01:milk3,
   
    category: "Milk",

    desc: "Serves 1 | A delicious and luscious thick and tasty drink made with icecream blended untill smooth texture and topped with brownie choco chips.",
  },
  {
    id: "25",
    title: "Strawberry Choco Chips Thick Shake",
    price:219,
    image01:milk4,
   
    category: "Milk",

    desc: "A refreshing milkshake prepared with strawberry ice cream, choco chips and wholesome milk - perfect to satisfy your cravings.",
  },
  {
    id: "26",
    title: "Caramel Banana Thick Shake",
    price:219,
    image01:milk5,
   
    category: "Milk",

    desc: "A crunchy and creamy milkshake made by blending wholesome milk with delectable banana, caramel and refreshing ice cream.",
  },
  {
    id: "27",
    title: "Oreo Thick Shake",
    price:209,
    image01:milk6,
   
    category: "Milk",

    desc: "Serves 1 | An indulgent crunchy and creamy milkshake made by blending milk with oreo cookies.",
  },
  {
    id: "28",
    title: "Oreo Peanut Butter Thick Shake",
    price:235,
    image01:milk7,
   
    category: "Milk",

    desc: "Serves 1 | Oreo Peanut thick shake is a decadent dessert with a mixture of vanilla icecream, cookies, oreo biscuits blended untill smooth texture.",
  },
  
  
  
];

export default products;
