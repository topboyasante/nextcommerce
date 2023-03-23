import { create } from "zustand";
import {persist,createJSONStorage} from 'zustand/middleware'


export const useBearStore = create(
  (set)=>({
    cart:{
        items:[
        ]
    },
    products:{
        items: []
    },
    //Functions

        addItemToCart: (payload) => {
            set((state) => {
              /* Check the cart, and look for an item which has the same ID as the new Item's ID. */
              const existingItem = state.cart.items.find((item) => item.id === payload.id);
              /* If there's an element of that sort, increase the element's qtyInCart property, and its price property */
              if (existingItem) {
                existingItem.qtyInCart++;
                existingItem.totalAmount += payload.price;
                return { cart: { items: [...state.cart.items] } };
              }
              /* If there's no element of that sort, add the new element to the cart (action.payload) */
              else {
                return { cart: { items: [...state.cart.items, payload] } };
              }
        });
      },
      removeFromCart: (payload) =>
        set((state) => ({
          cart:{items: state.cart.items.filter((item) => item.id !== payload)},
      })),
})
)