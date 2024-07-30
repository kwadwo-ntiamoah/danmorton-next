import { Table, TableHead, TableHeadCell, TableBody } from "flowbite-react";
import { CustomerTableItem } from ".";
import { Customer, getAllCustomersAsync } from "@/app/lib/customer.action";

export const CustomerTable = async () => {

  const res = await getAllCustomersAsync()
  var customers: Customer[] = JSON.parse(JSON.stringify(res))
  
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableHeadCell>Customer</TableHeadCell>
          <TableHeadCell>Address</TableHeadCell>
          <TableHeadCell>Email</TableHeadCell>
          <TableHeadCell>No. Of Visits</TableHeadCell>
          <TableHeadCell>...</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {
            customers.map(customer => (
              <CustomerTableItem customer={customer} key={customer.id} />
            ))
          }
        </TableBody>
      </Table>
    </div>
  );
};
