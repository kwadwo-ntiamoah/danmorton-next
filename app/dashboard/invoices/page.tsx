import { getAllInvoicesAsync, Invoice } from "@/app/lib/invoices.action";
import { OpenInvoiceDrawerButton } from "../components";
import { InvoiceTable } from "./components/_invoice.table";

const Page = async ({
  searchParams,
}: {
  searchParams?: {
    customerName?: string;
  };
}) => {
  const res = await getAllInvoicesAsync(searchParams?.customerName ?? "")
  var invoices: Invoice[] = JSON.parse(JSON.stringify(res))

  return (
    <div className="flex flex-col space-y-10 p-8">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <p className="text-2xl text-black">Invoices</p>
          <p>Here&apos;s what&apos;s going on with your business right now</p>
        </div>

        <OpenInvoiceDrawerButton />
      </div>

      <InvoiceTable invoices={invoices}/>
    </div>
  );
};

export default Page;
