import { HiShoppingCart } from "react-icons/hi";
import { Drawer, Button } from "flowbite-react";
import { AddUserForm } from "./_addUser.form";

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
            Provide details of new User
          </p>
          
          <AddUserForm />
        </div>
      </Drawer.Items>
    </Drawer>
    )
}