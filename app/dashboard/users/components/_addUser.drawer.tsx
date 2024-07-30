import { HiShoppingCart } from "react-icons/hi";
import { Drawer, Button } from "flowbite-react";

export interface UserDrawerProps {
    isOpen: boolean;
    handleClose: () => void;
  }
  

export const AddUserDrawer = (props: UserDrawerProps) => {
    return (
        <Drawer
      open={props.isOpen}
      onClose={props.handleClose}
      position="right"
      className="w-2/5"
    >
      <Drawer.Header titleIcon={HiShoppingCart} title="Add User" />
      <Drawer.Items>
        <div className="flex flex-col p-2 space-y-5">
          <p className="text-sm">
            Simply increase count of item to add them to a basket
          </p>
          
        </div>
      </Drawer.Items>
    </Drawer>
    )
}