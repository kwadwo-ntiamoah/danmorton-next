import { OpenInvoiceDrawerButton } from "../components";
import { PaymentTable } from "./components/_payment.table";

const Page = async () => {
  return (
    <div className="flex flex-col space-y-10 p-8">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <p className="text-2xl text-black">Payments</p>
          <p>Here&apos;s what&apos;s going on with your business right now</p>
        </div>

        <OpenInvoiceDrawerButton />
      </div>

      <PaymentTable />
    </div>
  );
};

export default Page;
