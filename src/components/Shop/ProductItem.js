import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import {
  MDBCard,
  MDBCardImage,
  MDBCardOverlay,
} from "mdb-react-ui-kit";

import classes from "./ProductItem.module.css";
import AddToCartIcon from "../Cart/CartIcon/AddToCartIcon";

const categoryStyle = {
  color: "hsl(7, 20%, 60%)",
};
const priceStyle = {
  color: "hsl(14, 86%, 42%)",
  fontWeight: 700,
};


const ProductItem = (props) => {
  const [addToCartToggle, setAddToCartToggle] = useState(false);
  const [addToCartBtnClicked, setAddToCartBtnClicked] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const { id, image, name, category, price } = props.item; //extracting these items through props from where we set it in Products.js
  const formattedPrice = `$${price.toFixed(2)}`;

  const addToCartToggleHandler = () => {
    setAddToCartToggle((addToCartToggle) => !addToCartToggle);
  };

  // Find the existing item in the cart to get its quantity
  const existingItem = cartItems.find((item) => item.id === id);
  const itemQuantity = existingItem ? existingItem.quantity : 0;

  const unclickedAddToCartButton = (
    <button
      onClick={addToCartToggleHandler}
      type="button"
      className={classes.actions}
    >
      <span className="me-2">
        <AddToCartIcon />
      </span>
      <span>Add to Cart</span>
    </button>
  );

  
  console.log('items: ', cartItems);
  
  //revert back to the unclicked button
  if (itemQuantity === 0 && addToCartBtnClicked) {
    console.log('zero!');
    setAddToCartBtnClicked(false);
    setAddToCartToggle(false);
  }

  const addToCartButtonHandler = () => {
    setAddToCartBtnClicked(true);
    
    dispatch(cartActions.addItemToCart({
      id,
      name,
      category,
      image,
      price
    }));
  };

  const removeFromCartButtonHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

    
  
  const clickedAddToCartButton = (
    <div type="button" className={classes.actionsClicked}>
      {/* <div className="position-relative"> */}
        <span className={classes.removeBtnSpan}>
          <button onClick={removeFromCartButtonHandler} className={classes.addRemoveBtn} type="button">
            <span className={classes.removeBtnInnerSpan}>-</span>
          </button>
        </span>
        <span>{itemQuantity}</span>
        <span className={classes.addBtnSpan}>
          {" "}
          <button onClick={addToCartButtonHandler} className={classes.addRemoveBtn} type="button">
            <span className={classes.addBtnInnerSpan}>+</span>
          </button>
        </span>
      {/* </div> */}
    </div>
  );

  

  const cardClasses = `${classes.card} ${addToCartBtnClicked ? classes.activeCard : ''}`;

  return (
    <Fragment>
      <li className={classes.productListItem}>
        <MDBCard className={cardClasses} alignment="center">
          <MDBCardImage src={image} overlay />
          <MDBCardOverlay className={classes.cardImgOverlay}>
            {!addToCartToggle && unclickedAddToCartButton}
            {addToCartToggle && clickedAddToCartButton}
          </MDBCardOverlay>
        </MDBCard>
        <div className="mt-5">
          <h6 style={categoryStyle}>{category}</h6>
          <h5 className={classes.productName}>{name}</h5>
          <h5 style={priceStyle}>{formattedPrice}</h5>
        </div>
      </li>
    </Fragment>
  );
};

export default ProductItem;
