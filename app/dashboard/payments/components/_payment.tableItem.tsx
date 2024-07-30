import { User } from "@/app/lib/auth.action";
import { Basket } from "@/app/lib/basket.action";
import { CatalogItem } from "@/app/lib/catalogs.action";
import { Payment } from "@/app/lib/payments.action";
import { TableRow, TableCell, Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export const PaymentTableItem = ({
  payment,
  id,
}: {
  payment: Payment;
  id: string | number;
}) => {
  return (
    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <TableCell>
        <p className="uppercase text-xs">{id}</p>
      </TableCell>
      <TableCell>
        <Link href={`/dashboard/invoices/${payment.invoiceId}`}>
        <p className="uppercase text-xs text-blue-500">View Invoice</p>
        </Link>
      </TableCell>
      <TableCell>
        <p className="text-orange-500 uppercase text-[0.7rem]">
          {payment?.paymentType == 0
            ? "cash"
            : payment?.paymentType == 1
            ? "mobile money"
            : "Bank Transfer"}
        </p>
      </TableCell>
      <TableCell>
        <p className="uppercase text-xs">{payment.amountPaid.currency} {payment.amountPaid.amount}</p>
      </TableCell>
      <TableCell>
        <p>{payment.paidInByName}</p>
      </TableCell>
    </TableRow>
  );
};
