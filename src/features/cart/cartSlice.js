import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      pizzaId: 32,
      name: "crown crust",
      quantity: 4,
      unitPrice: 16,
      totalPrice: 48,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;

      item.totalPrice = item.unitPrice * item.totalPrice;
    },
    decreaseItemQuantity: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;

      item.totalPrice = item.unitPrice * item.totalPrice;
    },
    clearCart: (state) => {
      state.cart = initialState;
    },
  },
});

export const {
  addItem,
  deleteItem,
  decreaseItemQuantity,
  increaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
