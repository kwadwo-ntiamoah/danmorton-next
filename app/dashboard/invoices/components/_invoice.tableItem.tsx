import { Invoice } from "@/app/lib/invoices.action";
import { TableRow, TableCell, Button } from "flowbite-react";
import Link from "next/link";

export const InvoiceTableItem = ({
  invoice,
  index
}: {
  invoice: Invoice;
  index: string | number
}) => {
  return (
    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <TableCell>
        <p className="uppercase text-xs">{index}</p>
      </TableCell>
      <TableCell className="whitespace-nowrap font-medium ">
        <Link href={`/dashboard/invoices/${invoice.id}`}>
          <p className="hover:text-blue-500 cursor-pointer text-gray-900">
            {invoice.invoiceNumber}
          </p>
        </Link>
        <p className="text-xs uppercase">{invoice.invoiceItems.length} Items</p>
      </TableCell>
      <TableCell>
        <p className="uppercase text-xs">{invoice.billTo.name}</p>
        <p className="text-xs">{invoice.billTo.contact}</p>
      </TableCell>
      <TableCell>
        <p className="text-xs">
          {invoice.totalAmount.currency} {invoice.totalAmount.amount}
        </p>
        <p className="text-xs">{invoice.discount} %</p>
      </TableCell>
      <TableCell>
        <p className="text-xs">
          {invoice.totalAmount.currency} {invoice.amountPaid.amount}
        </p>
      </TableCell>
      <TableCell className="font-bold">
        { invoice.paymentStatus == 0 && <p className="text-orange-500 uppercase text-[0.7rem]">NOT PAID</p>}
        { invoice.paymentStatus == 1 && <p className="text-slate-500 uppercase text-[0.7rem]">PAID PARTIALLY</p>}
        { invoice.paymentStatus == 2 && <p className="text-green-500 uppercase text-[0.7rem]">FULLY PAID</p>}
        { invoice.paymentStatus == 3 && <p className="text-red-600 uppercase text-[0.7rem]">CANCELLED</p>}
      </TableCell>
      <TableCell>
        <div className="flex space-x-2">
        <Link href={`/dashboard/invoices/${invoice.id}`}>
          <Button
            size="xs"
            color="dark"
          >
            View
          </Button>
          </Link>
        </div>
      </TableCell>
    </TableRow>
  );
};
