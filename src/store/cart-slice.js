import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
      items: [],
      totalItems: 0,
      overallPrice: 0,
      changed: false
    },
    reducers: {
      addItemToCart(state, action) {
          const newItem = action.payload;
          const existingItem = state.items.find((item) => item.id === newItem.id);
          state.totalItems++; //we are adding one more item in the cart regardless of whether the item exists or not
          if (!existingItem) {
            //we can use 'push' here because redux toolkit ensures we don't directly manipulate our state
            state.items.push({
              id: newItem.id,
              name: newItem.name,
              category: newItem.category,
              image: newItem.image,
              price: newItem.price,
              quantity: 1, //because we are adding an item for the first time
              totalPrice: newItem.price, //newItem.price * quantity but because quantity is 1, we just use newItem.price
            });
          } else {
            //we can manipulate it directly thanks to redux toolkit
            //we update the quantity and total price
            existingItem.quantity++;
            existingItem.totalPrice = existingItem.totalPrice + newItem.price;
          }
          //get the overall price
          state.overallPrice = state.items.reduce((curNumber, item) => {
            return curNumber + item.totalPrice;
          }, 0);
      },

      removeItemFromCart(state, action) {
        const id = action.payload;
        const existingItem = state.items.find((item) => item.id === id);
        state.totalItems--; //we are removing an item from the cart regardless of the item's quantity
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id); //keep the items whose id doesn't match the one from our payload
        } else {
          existingItem.quantity--;
          existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        }
         //get the overall price
         state.overallPrice = state.overallPrice - existingItem.price;
      },

      deleteItemFromCart(state, action) {
        const id = action.payload;
        const existingItem = state.items.find((item) => item.id === id);
        state.totalItems = state.totalItems - existingItem.quantity; //get the total items
        state.overallPrice = state.overallPrice - existingItem.totalPrice; //get the overall price
        //delete item from cart after working on the above
        state.items = state.items.filter((item) => item.id !== id); 
      },

      clearCart(state) {
        state.items = [];
        state.totalItems = 0;
        state.overallPrice = 0;
      }

    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;