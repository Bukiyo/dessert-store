import {
    MDBCard,
    MDBCardImage,
  } from "mdb-react-ui-kit";

import classes from "./ModalItem.module.css";

const ModalItem = (props) => {
  const { id, image, name, category, price, totalPrice, quantity } = props.item; //extracting these items through props from where we set it in Modals.js
  const formattedPrice = `$${price.toFixed(2)}`;
  const formattedItemTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <li className="mt-3 mb-3">

        <div className={classes.orderConfirmedDiv}>
            <MDBCard className={classes.imgCard} alignment="center">
            <MDBCardImage src={image} overlay />
            </MDBCard>
            <div>
            <h5 className={classes.cartItemName}>{name}</h5>
            <span className={classes.quantityStyle}>{quantity}x</span>{" "}
            <span className={classes.priceStyle}>@ {formattedPrice}</span>{" "}
            </div>
            <span className={classes.totalPriceStyle}>
                {formattedItemTotalPrice}
            </span>
        </div>
    </li>
  );
};

export default ModalItem;
