import { create } from "zustand";

export const useBearStore = create((set)=>({
    cart:{
        items:[
        ]
    },
    //Functions
    addItemToCart: (payload) => {
        set((state) => {
          /* Check the cart, and look for an item which has the same ID as the new Item's ID. */
          const existingItem = state.cart.find((item) => item.id === payload.id);
          /* If there's an element of that sort, increase the element's qtyInCart property, and its price property */
          if (existingItem) {
            existingItem.qtyInCart++;
            existingItem.totalPrice += payload.price;
            return { cart: [...state.cart] };
          }
          /* If there's no element of that sort, add the new element to the cart (action.payload) */
          else {
            return { cart: [...state.cart.items, payload] };
          }
        });
      },
}))