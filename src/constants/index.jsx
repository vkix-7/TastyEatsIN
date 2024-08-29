import dish1 from "../assets/dish1.avif";
import dish2 from "../assets/dish2.avif";
import dish3 from "../assets/dish3.avif";

import dish4 from "../assets/dish4.avif";
import dish5 from "../assets/dish5.avif";
import dish61 from "../assets/dish61.jpeg";
import dish7 from "../assets/dish7.avif";
import dish8 from "../assets/dish8.jpeg";
import dish9 from "../assets/dish9.avif";
import dish10 from "../assets/dish10.avif";
import dish11 from "../assets/dish11.jpeg";
import dish12 from "../assets/dish12.avif";
import italian from "../assets/italian.jpeg";
import japanese from "../assets/japanese.jpeg";
import indian from "../assets/indian.jpeg";
import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets";
import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "Dishes", targetId: "dishes" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Expertise", targetId: "expertise" },
  { text: "Review", targetId: "review" },
  { text: "Contact", targetId: "contact" },
];

export const DISHES = [
  {
    imgURL: dish1,
    name: "Veg-Cravings",
    price: "Rs.(x)",
    description: "Creamy pasta with bacon and cheese",
  },
  {
    imgURL: dish2,
    name: "Pizzas",
    price: "Rs.(x)",
    description: "Craved Doubled CHeesed Pizzas with spicy sauces",
  },
  {
    imgURL: dish3,
    name: "Spicy-Rolls",price:"Rs.(x)",
    description: "Fresh tomatoes, mozzarella, and basil with balsamic glaze",
  },
  {
    imgURL: dish5,
    name: "Chineese Corner",price:"Rs.(x)",
    description: "Decadent chocolate cake with a gooey center",
  },
  {  imgURL: dish4,
    name: "Golden Bowl",price:"Rs.(x)",
    description: "Assorted seafood and vegetables wrapped in seaweed and rice",
  },
  {
    imgURL: dish10,
    name: "Barbaque",price:"Rs.(x)",
    description: "Crisp lettuce, olives, feta cheese, and tangy dressing",
  },
  {
    imgURL: dish7,
    name: "Burgers",price:"Rs.(x)",
    description: "Stir-fried Crispy burgers with shrimp, tofu, and peanuts",
  },
  {
    imgURL: dish9,
    name: "Subway",price:"Rs.(x)",
    description: "Crispy Paneer with pancakes, cucumber, and hois in sauce",
  },
  {imgURL: dish8,
    name: "Chilli-Paneer",price:"Rs.(x)",
    description: "Crispy Paneer with pancakes, cucumber, and hois in sauce",
   
  },
  { imgURL: dish11,
    name: "Salads",
    price:"Rs.(x)",
    description: "Tender beef filet wrapped in fresh cabbage with mushrooms and herbs",
    
  },
  {imgURL: dish61,
    name: "Chole-chawal",price:"Rs.(x)",
    description: "Chole Chawal: A Hearty and Flavorful North Indian Comfort Food",
   
  },
  {imgURL: dish12,
    name: "Ice Cream",price:"Rs.(x)",
    description: "Classic Ice Cream: A Creamy, Chilled Delight in Every Flavor",
   
  }
];

export const ABOUT = {
  header: "We love cooking!",
  content:
    "At TastyEatsIn, we believe that great food goes beyond taste; it tells a story of dedication and creativity. From our chef's signature creations to our attentive service, every detail is curated to ensure your visit is nothing short of exceptional. Whether you're savoring our renowned Tikka Kebab or exploring our diverse menu inspired by global flavors, each dish is a celebration of flavor and innovation. Join us for a culinary journey where every bite leaves a lasting impression. Experience TastyEatsIn—where every meal is a masterpiece.",
};

export const MISSION =
  "At our restaurant, our mission is to create delicious and memorable dining experiences.";

export const CUSINES = [
  {
    number: "01.",
    imgURL1: indian,
    Name: "Indian",
    Description:
      "Indulge in the rich and diverse tastes of India, with a menu that celebrates the country's culinary heritage.",
   
  },
  {
    number: "02.",
    imgURL1: japanese,
    Name: "Crazy-Cravings",
    Description:
      "Delight in the art of Japanese culinary excellence, offering a fusion of classic and modern flavors.",
  },
  { number: "03.",
    imgURL1: italian,
    Name: "Italian",
    Description:
      "Experience the flavors of Italy with our exquisite Italian cuisine, featuring traditional recipes and contemporary dishes.",
  },
];

export const REVIEW = {
  name: "Rohan Singh",
  profession: "Food Critic",
  content:
    "“As a seasoned food critic, my expectations are always high when stepping into a new dining establishment. TastyEatsIn, with its unassuming exterior and elegantly designed interior, promised a unique culinary experience from the moment I walked in. And I must say, it delivered beyond my expectations.”",
};

export const CONTACT = [
  { key: "address", value: "Address: 123 Main Street, Uttar Pradesh ,Lucknow, India" },
  { key: "phone", value: "Phone: 123-456-7890" },
  { key: "email", value: "Email: tastyEatsin@gmail.com" },
];


export const footerLinks = [
  {
      name2: "Popular Dishes",
      links: [
          { name2: "Pure-Veg Delights", link: "/" },
          { name2: "Raksha-Bandhan Specials", link: "/" },
          { name2: "Pizzas", link: "/" },
          { name2: "Burgers", link: "/" },
          { name2: "North-Indian", link: "/" },
          { name2: "Idli-Dosa-Rolls", link: "/" },
          { name2: "Chinese Delights", link: "/" },
          { name2: "Veg-Paneer, Manchurian", link: "/" },
          { name2: "Cakes", link: "/" },
          
         
      ],
  },
  {
      name2: "Help",
      links: [
          { name2: "About us", link: "/" },
          { name2: "FAQs", link: "/" },
          { name2: "How it works", link: "/" },
          { name2: "Privacy policy", link: "/" },
          { name2: "Payment policy", link: "/" },
      ],
  },
  {
      name2: "Get in touch",
      links: [
          { name2: "tastyeats@in.com", link: "mailto:tastyeatsin@gmail.com" },
          { name2: "+92554862354", link: "tel:8840450483" },
      ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
