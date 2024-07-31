import { HiShoppingCart } from "react-icons/hi";
import { Drawer, Button } from "flowbite-react";
import { BasketItem } from "@/app/lib/basket.action";
import { BasketItemDetails } from "./_basket.item";

export interface BasketItemsDrawerProps {
    isOpen: boolean;
    handleClose: () => void;
    basketItems: BasketItem[]
  }
  

export const BasketItemsDrawer = (props: BasketItemsDrawerProps) => {
    return (
        <Drawer
      open={props.isOpen}
      onClose={props.handleClose}
      position="right"
      className="w-3/5"
    >
      <Drawer.Header titleIcon={HiShoppingCart} title="Add Item" />
      <Drawer.Items>
        <div className="flex flex-col p-2 space-y-5">
          <p className="text-sm">
            Break down for Items in Basket
          </p>
          
          <div className="grid grid-cols-2 gap-5">
          {
            props.basketItems.length && props.basketItems.map(item => (
              <BasketItemDetails item={item} />
            ))
          }
          </div>
          
        </div>
      </Drawer.Items>
    </Drawer>
    )
}