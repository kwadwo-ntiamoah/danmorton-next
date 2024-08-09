import { PaymentStatus } from "@/app/lib";
import { Invoice } from "@/app/lib/invoices.action";
import {
  Table,
  TableHead,
  TableHeadCell,
  TableBody,
  TableRow,
  TableCell,
} from "flowbite-react";

export const InvoiceCard = ({ invoice }: { invoice: Invoice }) => {
  const calculateTotalPrice = () => {
    var fullPrice = (invoice?.totalAmount.amount * 100) / invoice?.discount;

    if (invoice?.discount === 0) {
      return (
        <p>
          {invoice?.totalAmount.currency} {invoice?.totalAmount.amount}
        </p>
      );
    }

    return (
      <p>
        {invoice?.totalAmount.currency} {fullPrice}
      </p>
    );
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableHeadCell>Item</TableHeadCell>
          <TableHeadCell>Quantity</TableHeadCell>
          <TableHeadCell>Service</TableHeadCell>
          <TableHeadCell>Unit Price</TableHeadCell>
          <TableHeadCell>Total</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {invoice?.invoiceItems != null &&
            invoice.invoiceItems.length > 0 &&
            invoice.invoiceItems.map((item, index) => (
              <TableRow
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={index}
              >
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {item.name}
                </TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.serviceType}</TableCell>
                <TableCell>{item.serviceAmount.amount}</TableCell>
                <TableCell>
                  {item.serviceAmount.amount * item.quantity}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableHead>
          <TableHeadCell></TableHeadCell>
          <TableHeadCell></TableHeadCell>
          <TableHeadCell></TableHeadCell>
          <TableHeadCell>Total</TableHeadCell>
          <TableHeadCell>{calculateTotalPrice()}</TableHeadCell>
        </TableHead>
        <TableHead>
          <TableHeadCell></TableHeadCell>
          <TableHeadCell></TableHeadCell>
          <TableHeadCell></TableHeadCell>
          <TableHeadCell>Discount</TableHeadCell>
          <TableHeadCell>{invoice?.discount} %</TableHeadCell>
        </TableHead>
        <TableHead>
          <TableHeadCell></TableHeadCell>
          <TableHeadCell></TableHeadCell>
          <TableHeadCell></TableHeadCell>
          <TableHeadCell>Amount Payable</TableHeadCell>
          <TableHeadCell>
            {invoice?.totalAmount.currency} {invoice?.totalAmount.amount}
          </TableHeadCell>
        </TableHead>
        {invoice.paymentStatus === PaymentStatus.PAID_PARTIALLY && (
          <TableHead color="dark">
            <TableHeadCell colSpan={5} className="text-xs text-red-500">NB: An amount of <span className="text-black">{invoice.totalAmount.currency} {invoice.totalAmount.amount - invoice.amountPaid.amount}</span> has been paid out of the total</TableHeadCell>
          </TableHead>
        )}
      </Table>
    </div>
  );
};
