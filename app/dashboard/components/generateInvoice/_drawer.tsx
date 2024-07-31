import { Button, Drawer } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";
import { CatalogItems } from "./_catalogItems";
import { GenerateInvoiceCustomerForm } from "./_customer.form";
import { InvoiceService } from "./_service.form";
import { ReactNode, useEffect, useState } from "react";
import { generateInvoiceAsync, Invoice, InvoiceItem } from "@/app/lib/invoices.action";
import { Customer } from "@/app/lib/customer.action";
import { ErrorAlert } from "@/app/ui/common/alerts";
import { useRouter } from "next/navigation";

export interface InvoiceDrawerProps {
  isOpen: boolean;
  handleClose: () => void;
}

export interface GenerateInvoiceProps {
  customer: Customer | undefined;
  items: InvoiceItem[];
  service: string;
}

export const InvoiceDrawer = (props: InvoiceDrawerProps) => {
  const router = useRouter()

  const [data, setData] = useState<GenerateInvoiceProps>({
    customer: undefined,
    service: "",
    items: [],
  });
  const [state, setState] = useState({ message: "", isLoading: false });

  const generateInvoice = async () => {
    setState({ ...state, isLoading: true })
    var res = await generateInvoiceAsync(data);

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

  const setInvoiceItems = (items: InvoiceItem[]) => {
    setData({ ...data, items: items });
  };

  const setSelectedService = (selectedService: string) => {
    setData({ ...data, service: selectedService });
  };

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
            Simply increase count of item to add them to a basket
          </p>
          {state.message && <ErrorAlert message={state.message} />}
          <InvoiceService setSelectedService={setSelectedService} />
          <GenerateInvoiceCustomerForm
            setCustomerDetails={setCustomerDetails}
          />

          <div className="flex flex-col space-y-6">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
              <CatalogItems setInvoiceItems={setInvoiceItems} />
            </div>
            <div>
              <Button
                className="text-xs"
                color="dark"
                onClick={generateInvoice}
                isProcessing={state.isLoading}
              >
                Generate Invoice - GHS{" "}
                {data.items.reduce((a, b) => a + b.price, 0)}
              </Button>
            </div>
          </div>
        </div>
      </Drawer.Items>
    </Drawer>
  );
};

