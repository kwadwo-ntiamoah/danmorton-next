import { getAllInvoicesAsync, Invoice } from "@/app/lib/invoices.action";
import {
  Table,
  TableHead,
  TableHeadCell,
  TableBody,
} from "flowbite-react";
import { InvoiceTableItem } from "./_invoice.tableItem";

export const InvoiceTable = async () => {

  const res = await getAllInvoicesAsync()
  var invoices: Invoice[] = JSON.parse(JSON.stringify(res))

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableHeadCell>#</TableHeadCell>
          <TableHeadCell>Invoice</TableHeadCell>
          <TableHeadCell>Customer</TableHeadCell>
          <TableHeadCell>Amount</TableHeadCell>
          <TableHeadCell>Status</TableHeadCell>
          <TableHeadCell>...</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {
            invoices?.length && (
              invoices.map((invoice, index) => (
                <InvoiceTableItem invoice={invoice} index={index + 1} key={invoice.id} />
              ))
            )
          }
        </TableBody>
      </Table>
    </div>
  );
};
