import { OpenInvoiceDrawerButton } from "../components";
import { BasketTable } from "./components/_basket.table";

const Page = async () => {
  return (
    <div className="flex flex-col space-y-10 p-8">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <p className="text-2xl text-black">Baskets</p>
          <p>View Baskets for payments received</p>
        </div>

      <OpenInvoiceDrawerButton />
      </div>

    <BasketTable />
    </div>
  );
};

export default Page;
