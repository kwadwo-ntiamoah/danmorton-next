
import { Payment } from "@/app/lib/payments.action";
import { TableRow, TableCell, Button, Table } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export const PaymentTableItem = ({
  payment,
  id,
}: {
  payment: Payment;
  id: string | number;
}) => {
  const getDate = (date: string) => {
    var res = new Date(date)
    return res.toDateString()
  }

  return (
    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <TableCell>
        <p className="uppercase text-xs">{id}</p>
      </TableCell>
      <TableCell>
        <p>{getDate(payment.dateCreated)}</p>
      </TableCell>
      <TableCell>
        <Link href={`/dashboard/invoices/${payment.invoiceId}`}>
        <p className="uppercase text-xs text-blue-500">View Invoice</p>
        </Link>
      </TableCell>
      <TableCell>
        <p className="text-orange-500 uppercase text-[0.7rem]">
          {payment?.paymentMethod == 0
            ? "cash"
            : payment?.paymentMethod == 1
            ? "mobile money"
            : "Bank Transfer"}
        </p>
      </TableCell>
      <TableCell>
        <p className="uppercase text-xs">{payment.amountPaid.currency} {payment.amountPaid.amount}</p>
      </TableCell>
      <TableCell>
        <p>{payment.paidBy}</p>
      </TableCell>
    </TableRow>
  );
};
