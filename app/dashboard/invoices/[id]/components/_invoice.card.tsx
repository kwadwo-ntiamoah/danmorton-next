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
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableHeadCell>Item</TableHeadCell>
          <TableHeadCell>Quantity</TableHeadCell>
          <TableHeadCell>Unit Price</TableHeadCell>
          <TableHeadCell>Total</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {/* <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {invoice.service.type}
            </TableCell>
            <TableCell>1</TableCell>
            <TableCell>
              {invoice.service.price.currency} {invoice.service.price.amount}
            </TableCell>
            <TableCell>
              {invoice.service.price.currency} {invoice.service.price.amount}
            </TableCell>
          </TableRow> */}
          {invoice?.invoiceItems != null &&
            invoice.invoiceItems.length &&
            invoice.invoiceItems.map((item, index) => (
              <TableRow
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={index}
              >
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {item.name}
                </TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>
                  {item.price.currency} {item.price.amount}
                </TableCell>
                <TableCell>
                  {item.price.currency} {item.price.amount * item.quantity}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableHead>
          <TableHeadCell></TableHeadCell>
          <TableHeadCell></TableHeadCell>
          <TableHeadCell>Discount</TableHeadCell>
          <TableHeadCell>{invoice?.discount} %</TableHeadCell>
        </TableHead>
        <TableHead>
          <TableHeadCell></TableHeadCell>
          <TableHeadCell></TableHeadCell>
          <TableHeadCell>Total</TableHeadCell>
          <TableHeadCell>
            {invoice?.totalPrice.currency} {invoice?.totalPrice.amount}
          </TableHeadCell>
        </TableHead>
      </Table>
    </div>
  );
};
