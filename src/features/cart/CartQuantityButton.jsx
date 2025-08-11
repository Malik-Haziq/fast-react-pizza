import React from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  getItemCartQuantity,
  increaseItemQuantity,
} from "./cartSlice";

export default function CartQuantityButton({ pizzaId }) {
  const dispatch = useDispatch();
  const itemCartQuantity = useSelector(getItemCartQuantity(pizzaId));
  return (
    <div className="flex gap-2 items-center">
      <Button
        type="round"
        onClick={(e) => {
          e.preventDefault();
          dispatch(decreaseItemQuantity(pizzaId));
        }}
      >
        -
      </Button>
      <span>{itemCartQuantity}</span>
      <Button
        type="round"
        onClick={(e) => {
          e.preventDefault();
          dispatch(increaseItemQuantity(pizzaId));
        }}
      >
        +
      </Button>
    </div>
  );
}
