import { HiShoppingCart } from "react-icons/hi";
import { Drawer, Button } from "flowbite-react";
import { PaymentForm } from "./_makePayment.form";
import { Invoice } from "@/app/lib/invoices.action";

export interface PaymentDrawerProps {
    isOpen: boolean;
    handleClose: () => void;
    invoice: Invoice
  }
  

export const MakePaymentDrawer = (props: PaymentDrawerProps) => {
    return (
        <Drawer
      open={props.isOpen}
      onClose={props.handleClose}
      position="right"
      className="w-2/5"
    >
      <Drawer.Header titleIcon={HiShoppingCart} title="Generate Invoice" />
      <Drawer.Items>
        <div className="flex flex-col p-2 space-y-5">
          <p className="text-sm">
            Provide payment Details for Invoice #{props.invoice.invoiceNumber}
          </p>
          
          <PaymentForm invoice={props.invoice}/>
        </div>
      </Drawer.Items>
    </Drawer>
    )
}