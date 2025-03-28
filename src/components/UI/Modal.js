import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { createPortal } from "react-dom";
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalBody,
  MDBModalFooter
} from "mdb-react-ui-kit";
import OrderConfirmedIcon from "../Cart/CartIcon/OrderConfirmedIcon";
import ModalItem from "./ModalItem";

import classes from "./Modal.module.css";


const MdBootstrapModal = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const overallPrice = useSelector((state) => state.cart.overallPrice);
  const formattedOverallrice = `$${overallPrice.toFixed(2)}`;
  
  return (
    <Fragment>
      <MDBModal tabIndex="-1" open={props.centredModal} onClose={props.onClose}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalBody>
              <OrderConfirmedIcon />
              <h2 className="mt-4 fw-bold">Order Confirmed</h2>
              <p style={{ color: "#ac8b81" }}>We hope you enjoy your food!</p>

              <section className={classes.orderConfirmedSection}>
                <ul>
                  {cartItems.map((item) => (
                    <ModalItem
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
                {/* <div className={classes.orderConfirmedDiv}>
                  <MDBCard className={classes.imgCard} alignment="center">
                    <MDBCardImage src={waffleImage} overlay />
                  </MDBCard>
                  <div>
                    <h5 className={classes.cartItemName}>Waffle</h5>
                    <span className={classes.quantityStyle}>1x</span>{" "}
                    <span className={classes.priceStyle}>@ {formattedPrice}</span>{" "}
                  </div>
                  <span className={classes.totalPriceStyle}>
                      {formattedItemTotalPrice}
                  </span>
                </div> */}
                <div className={classes.orderConfirmedTotal}>
                  <span>Order Total</span>
                  <span className="fw-bold">{formattedOverallrice}</span>
                </div>
              </section>
            </MDBModalBody>
            <MDBModalFooter>
              <button
                onClick={props.onStartNewOrder}
                type="button"
                className={classes.actions}
              >
                <span>Start New Order</span>
              </button>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </Fragment>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(
        <MdBootstrapModal
          centredModal={props.centredModal}
          onClose={props.onClose}
          onStartNewOrder={props.onStartNewOrder}
        />,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
