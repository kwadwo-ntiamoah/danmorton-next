import { Customer } from "@/app/lib/customer.action";
import { TableRow, TableCell, Button } from "flowbite-react";
import Link from "next/link";

export const CustomerTableItem = ({ customer }: { customer: Customer }) => {
  const getDate = (date: string) => {
    var res = new Date(date)
    return res.toDateString()
  }
    return (
        <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <TableCell className="whitespace-nowrap font-medium ">
          <p className="uppercase text-xs">{customer?.name}</p>
          </TableCell>
          <TableCell>
            <p>{customer?.address}</p>
          </TableCell>
          <TableCell>
            <p>{customer.contact}</p>
          </TableCell>
          <TableCell>
            <p>{getDate(customer.dateCreated)}</p>
          </TableCell>
          <TableCell>
            <div className="flex space-x-2">
              <Link href={`/dashboard/invoices?customerName=${customer.name}`}>
              <Button size="xs" color="light">
                View Invoices
              </Button>
              </Link>
            </div>
          </TableCell>
        </TableRow>
      );
}