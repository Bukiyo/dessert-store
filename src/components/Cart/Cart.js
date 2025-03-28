import { Fragment, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { useSelector } from "react-redux";

import EmptyCartIcon from "../Cart/CartIcon/EmptyCartIcon";
import CarbonNeutralIcon from "../Cart/CartIcon/CarbonNeutralIcon";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const headingStyles = {
  color: "hsl(14, 86%, 42%)",
  fontWeight: 700,
};
const Cart = () => {
  const [centredModal, setCentredModal] = useState(false);
  const totalItems = useSelector((state) => state.cart.totalItems);
  const cartItems = useSelector((state) => state.cart.items);
  const overallPrice = useSelector((state) => state.cart.overallPrice);
  const dispatch = useDispatch();

  const cartHasItems = cartItems.length > 0;
  
  const emptyCart = (
    <div className="p-4">
      <div className={classes.emptyCart}>
        <EmptyCartIcon />
      </div>
      <MDBCardText className={classes.emptyCartText}>
        Your added items will appear here
      </MDBCardText>
    </div>
  );

  //const totalPrice = 46.5;
  const formattedTotalPrice = `$${overallPrice.toFixed(2)}`;

  const showConfirmModalHandler = () => setCentredModal(!centredModal);


  const addedItemsToCart = (
    <div>
      <ul className={classes.cartItemUl}>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              name: item.name,
              image: item.image,
              quantity: item.quantity,
              price: item.price,
              totalPrice: item.totalPrice,
              
            }}
          />
        ))}
      </ul>
      <div className={classes.orderTotal}>
        <p>Order Total</p>
        <h4>{formattedTotalPrice}</h4>
      </div>
      <div className={classes.carbonNeutral}>
        <span className="me-2">
          <CarbonNeutralIcon />
        </span>{" "}
        <span>
          This is a <b>carbon-neutral</b> delivery
        </span>
      </div>
      <div>
        <button onClick={showConfirmModalHandler} type="button" className={classes.actions}>
          <span>Confirm Order</span>
        </button>
      </div>
    </div>
  );

  const onCloseModalHandler = () => {
    setCentredModal(false);
  };

  const startNewOrderHandler = () => {
    setCentredModal(false);
    dispatch(cartActions.clearCart());
  };

  return (
    <Fragment>
      <section>
        <Modal centredModal={centredModal} onClose={onCloseModalHandler} onStartNewOrder={startNewOrderHandler}/>
        <MDBCard className={classes.card}>
          <MDBCardBody>
            <MDBCardTitle style={headingStyles}>Your Cart ({totalItems})</MDBCardTitle>
            {/* <div className="p-4">
              <div className={classes.emptyCart}>
                <EmptyCartIcon />
              </div>
              <MDBCardText className={classes.emptyCartText}>
                Your added items will appear here
              </MDBCardText>
            </div> */}
            {!cartHasItems && emptyCart}
            {cartHasItems && addedItemsToCart}
          </MDBCardBody>
        </MDBCard>
      </section>
    </Fragment>
  );
};

export default Cart;
