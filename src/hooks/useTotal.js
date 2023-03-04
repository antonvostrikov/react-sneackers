import React from "react";

import { AppContext } from "../context";

export const useTotal = () => {
  const { cart } = React.useContext(AppContext)

  const total = cart.reduce((prev, current) => current.price + prev, 0)
  const tax = (total / 100) * 5

  return {
    total,
    tax
  }
}