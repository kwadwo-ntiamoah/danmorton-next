import { HiShoppingCart } from "react-icons/hi";
import { Drawer, Button } from "flowbite-react";
import { AddCatalogForm } from "./_addCatalog.form";
import { Product } from "@/app/lib/catalogs.action";

export interface CatalogDrawerProps {
  isOpen: boolean;
  handleClose: () => void;
  products: Product[]
}

export const AddCatalogDrawer = (props: CatalogDrawerProps) => {

  return (
    <Drawer
      open={props.isOpen}
      onClose={props.handleClose}
      position="right"
      className="w-2/5"
    >
      <Drawer.Header titleIcon={HiShoppingCart} title="Add Item" />
      <Drawer.Items>
        <div className="flex flex-col p-2 space-y-5">
          <p className="text-sm">Add Items here</p>

          <AddCatalogForm products={props.products}/>
        </div>
      </Drawer.Items>
    </Drawer>
  );
};
