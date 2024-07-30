import {
  OrderSummary,
  InvoiceStatusLineChart,
  CustomerBreakDownCharts,
  OpenInvoiceDrawerButton
} from "./components";

const Page = async () => {

  return (
    <div className="flex flex-col space-y-10 p-8">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <p className="text-2xl text-black">Dashboard</p>
          <p>Here&apos;s what&apos;s going on with your business right now</p>
        </div>

        <OpenInvoiceDrawerButton />
      </div>

      <OrderSummary />
      <InvoiceStatusLineChart />
      <CustomerBreakDownCharts />
    </div>
  );
};

export default Page;
