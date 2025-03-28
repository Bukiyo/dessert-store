import { Fragment } from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import waffleImage from "../../assets/images/image-waffle-desktop.jpg";
import cremeBruleeImage from "../../assets/images/image-creme-brulee-desktop.jpg";
import macaronImage from "../../assets/images/image-macaron-desktop.jpg";
import tiramisuImage from "../../assets/images/image-tiramisu-desktop.jpg";
import baklavaImage from "../../assets/images/image-baklava-desktop.jpg";
import meringueImage from "../../assets/images/image-meringue-desktop.jpg";
import cakeImage from "../../assets/images/image-cake-desktop.jpg";
import brownieImage from "../../assets/images/image-brownie-desktop.jpg";
import pannaCottaImage from "../../assets/images/image-panna-cotta-desktop.jpg";


const DUMMY_PRODUCTS = [
  {
    id: "p1",
    image: {
      thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
      mobile: "./assets/images/image-waffle-mobile.jpg",
      tablet: "./assets/images/image-waffle-tablet.jpg",
      desktop: waffleImage,
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    id: "p2",
    image: {
      thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
      mobile: "./assets/images/image-creme-brulee-mobile.jpg",
      tablet: "./assets/images/image-creme-brulee-tablet.jpg",
      desktop: cremeBruleeImage,
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    id: "p3",
    image: {
      thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
      mobile: "./assets/images/image-macaron-mobile.jpg",
      tablet: "./assets/images/image-macaron-tablet.jpg",
      desktop: macaronImage,
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    id: "p4",
    image: {
      thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
      mobile: "./assets/images/image-tiramisu-mobile.jpg",
      tablet: "./assets/images/image-tiramisu-tablet.jpg",
      desktop: tiramisuImage,
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    id: "p5",
    image: {
      thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
      mobile: "./assets/images/image-baklava-mobile.jpg",
      tablet: "./assets/images/image-baklava-tablet.jpg",
      desktop: baklavaImage,
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    id: "p6",
    image: {
      thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
      mobile: "./assets/images/image-meringue-mobile.jpg",
      tablet: "./assets/images/image-meringue-tablet.jpg",
      desktop: meringueImage,
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    id: "p7",
    image: {
      thumbnail: "./assets/images/image-cake-thumbnail.jpg",
      mobile: "./assets/images/image-cake-mobile.jpg",
      tablet: "./assets/images/image-cake-tablet.jpg",
      desktop: cakeImage,
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    id: "p8",
    image: {
      thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
      mobile: "./assets/images/image-brownie-mobile.jpg",
      tablet: "./assets/images/image-brownie-tablet.jpg",
      desktop: brownieImage,
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    id: "p9",
    image: {
      thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
      mobile: "./assets/images/image-panna-cotta-mobile.jpg",
      tablet: "./assets/images/image-panna-cotta-tablet.jpg",
      desktop: pannaCottaImage,
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];



const headingStyles = {
  color: "hsl(14, 65%, 9%)",
  fontWeight: 800,
};
const Products = () => {
  return (
    <Fragment>
      <section className={classes.products}>
        <p className={`mb-4 ${classes.productHeading}`} style={headingStyles}>Desserts</p>
        <ul>
          {DUMMY_PRODUCTS.map((product) => (
            <ProductItem
              key={product.id}
              item={{
                id: product.id,
                image: product.image.desktop,
                name: product.name,
                category: product.category,
                price: product.price
              }}
            />
          ))}
        </ul>
      </section>
    </Fragment>
  );
};

export default Products;
