import { Customer } from "@/app/lib/customer.action";
import { TableRow, TableCell, Button } from "flowbite-react";

export const CustomerTableItem = ({ customer }: { customer: Customer }) => {
    return (
        <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <TableCell className="whitespace-nowrap font-medium ">
          <p className="uppercase text-xs">{customer?.name}</p>
          <p className="text-xs">0540609437</p>
          </TableCell>
          <TableCell>
            <p>N/A</p>
            <p className="text-xs">Accra</p>
          </TableCell>
          <TableCell>
            <p>{customer.email}</p>
          </TableCell>
          <TableCell>
            ...
          </TableCell>
          <TableCell>
            <div className="flex space-x-2">
              <Button size="xs" color="light">
                View Invoices
              </Button>
            </div>
          </TableCell>
        </TableRow>
      );
}