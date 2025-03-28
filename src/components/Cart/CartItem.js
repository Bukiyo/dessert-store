import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import classes from "./CartItem.module.css";
import RemoveItemIcon from "./CartIcon/RemoveItemIcon";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { id, name, category, price, totalPrice, quantity } = props.item; 
  const formattedPrice = `$${price.toFixed(2)}`;
  const formattedItemTotalPrice = `$${totalPrice.toFixed(2)}`;

  const deleteFromCartButtonHandler = () => {
    dispatch(cartActions.deleteItemFromCart(id));
  };

  return (
    <li className={classes.cartItem}>
      <div>
        <h5 className={classes.cartItemName}>{name}</h5>
        <span className={classes.quantityStyle}>{quantity}x</span>{" "}
        <span className={classes.priceStyle}>@ {formattedPrice}</span>{" "}
        <span className={classes.totalPriceStyle}>{formattedItemTotalPrice}</span>
      </div>
      <div className={classes.removeBtnDiv}>
        <button onClick={deleteFromCartButtonHandler} className={classes.removeBtn} type="button">
          <RemoveItemIcon className={classes.svg}/>
        </button>
      </div>
    </li>
  );
};

export default CartItem;
