import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [], //JSON.parse(localStorage.getItem("cart")) || [];
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let index = state.value.findIndex((i) => i.id === action.payload.id);
      if (index < 0) {
        state.value = [...state.value, { ...action.payload, quantity: 1 }];
      } else {
        state.value = state.value.map((item, inx) =>
          inx === index ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    removeFromCart: (state, action) => {
      state.value = state.value.filter((i) => i.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    increaseCart: (state, { payload }) => {
      let index = state.value.findIndex((el) => el.id === payload.id);
      state.value = state.value.map((el, inx) => {
        if (index === inx) {
          return { ...el, amount: el.amount + 1 };
        } else {
          return el;
        }
      });
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    decreaseCart: (state, { payload }) => {
      let index = state.value.findIndex((el) => el.id === payload.id);
      state.value = state.value.map((el, inx) => {
        return index === inx ? { ...el, amount: el.amount - 1 } : el;
      });
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    deleteAllCart: (state) => {
      state.value = [];
      localStorage.removeItem("cart");
    },

    defaultCart: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseCart,
  increaseCart,
  deleteAllCart,
  defaultCart,
} = cartSlice.actions;
export default cartSlice.reducer;
