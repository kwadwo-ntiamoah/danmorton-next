import { getAllInvoicesAsync, Invoice } from "@/app/lib/invoices.action";
import {
  Table,
  TableHead,
  TableHeadCell,
  TableBody,
} from "flowbite-react";
import { InvoiceTableItem } from "./_invoice.tableItem";

export const InvoiceTable = async ({ invoices }: {invoices: Invoice[]}) => {

  

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableHeadCell>#</TableHeadCell>
          <TableHeadCell>Invoice</TableHeadCell>
          <TableHeadCell>Customer</TableHeadCell>
          <TableHeadCell>Amount</TableHeadCell>
          <TableHeadCell>Amount Paid</TableHeadCell>
          <TableHeadCell>Status</TableHeadCell>
          <TableHeadCell>...</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {
            invoices?.length > 0 && (
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
