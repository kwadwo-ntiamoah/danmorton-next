
import {
  Table,
  TableHead,
  TableHeadCell,
  TableBody,
} from "flowbite-react";
import { Basket, getAllBasketsAsync } from "@/app/lib/basket.action";
import { PaymentTableItem } from "./_payment.tableItem";
import { getPaymentsAsync, Payment } from "@/app/lib/payments.action";

export const PaymentTable = async () => {

  const res = await getPaymentsAsync()
  var items: Payment[] = JSON.parse(JSON.stringify(res))

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableHeadCell>#</TableHeadCell>
          <TableHeadCell>Invoice </TableHeadCell>
          <TableHeadCell>PaymentType</TableHeadCell>
          <TableHeadCell>Amount</TableHeadCell>
          <TableHeadCell>Paid In By</TableHeadCell>
          <TableHeadCell>...</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {
            items?.length && (
              items.map((item, index) => (
                <PaymentTableItem payment={item} id={index + 1} key={item.id} />
              ))
            )
          }
        </TableBody>
      </Table>
    </div>
  );
};
