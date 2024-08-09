import { Button, Drawer } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";
import { CatalogItems } from "./_catalogItems";
import { GenerateInvoiceCustomerForm } from "./_customer.form";
import {  useState } from "react";
import { Cart, CartItem, generateInvoiceAsync, Invoice, InvoiceItem } from "@/app/lib/invoices.action";
import { Customer } from "@/app/lib/customer.action";
import { ErrorAlert } from "@/app/ui/common/alerts";
import { useRouter } from "next/navigation";

export interface InvoiceDrawerProps {
  isOpen: boolean;
  handleClose: () => void;
}

export interface GenerateInvoiceProps {
  customer: Customer | undefined;
  items: CartItem[];
}

export const InvoiceDrawer = (props: InvoiceDrawerProps) => {
  const router = useRouter()

  const [data, setData] = useState<GenerateInvoiceProps>({
    customer: undefined,
    items: [],
  });
  const [state, setState] = useState({ message: "", isLoading: false });
  const [resetStatus, setResetStatus] = useState(false)

  const resetState = () => {
    setResetStatus(true)
  }

  const changeResetStatus = () => {
    setResetStatus(false)
  }

  const generateInvoice = async () => {
    setState({ ...state, isLoading: true })

    var payload: Cart = {
      discount: 0,
      recipientName: data.customer?.name ?? "",
      recipientAddress: data.customer?.address ?? "",
      recipientContact: data.customer?.contact ?? "",
      invoiceItems: data.items
    }

    var res = await generateInvoiceAsync(payload);

    if (!res.status) {
      setState({ isLoading: false, message: res.message });
    } else {
      var invoice: Invoice = JSON.parse(JSON.stringify(res.data))
      router.push("/dashboard/invoices/" + invoice.id)
    }
  };

  const setCustomerDetails = (customer: Customer) => {
    setData({ ...data, customer: customer });
  };

  const setInvoiceItems = (items: CartItem[]) => {
    setData({ ...data, items: items });
  };

  return (
    <Drawer
      open={props.isOpen}
      onClose={props.handleClose}
      position="right"
      className="w-3/4"
    >
      <Drawer.Header titleIcon={HiShoppingCart} title="Generate Invoice" />
      <Drawer.Items>
        <div className="flex flex-col p-2 space-y-5">
          <p className="text-sm">
            Simply increase count of item to add them to a basket
          </p>
          {state.message && <ErrorAlert message={state.message} />}
          <GenerateInvoiceCustomerForm
            setCustomerDetails={setCustomerDetails}
          />

          <div className="flex flex-col space-y-6">
            <p>Items</p>
            <div className="grid grid-cols-2 gap-5">
              <CatalogItems changeResetStatus={changeResetStatus} resetStatus={resetStatus} setInvoiceItems={setInvoiceItems} />
            </div>
            <div className="flex space-x-2">
              <Button
                className="text-xs"
                color="dark"
                onClick={generateInvoice}
                isProcessing={state.isLoading}
              >
                Generate Invoice - GHS{" "}
                {data.items.reduce((a, b) => a + (b.serviceAmount * b.quantity), 0)}
              </Button>
              <Button onClick={resetState}>Reset</Button>
            </div>
          </div>
        </div>
      </Drawer.Items>
    </Drawer>
  );
};

