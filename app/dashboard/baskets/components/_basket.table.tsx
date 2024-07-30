
import {
  Table,
  TableHead,
  TableHeadCell,
  TableBody,
} from "flowbite-react";
import { Basket, getAllBasketsAsync } from "@/app/lib/basket.action";
import { BasketTableItem } from "./_basket.tableItem";

export const BasketTable = async () => {

  const res = await getAllBasketsAsync()
  var items: Basket[] = JSON.parse(JSON.stringify(res))

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableHeadCell>#</TableHeadCell>
          <TableHeadCell>Basket #</TableHeadCell>
          <TableHeadCell>Status</TableHeadCell>
          <TableHeadCell>Count</TableHeadCell>
          <TableHeadCell>...</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {
            items?.length && (
              items.map((item, index) => (
                <BasketTableItem basket={item} id={index + 1} key={item.id} />
              ))
            )
          }
        </TableBody>
      </Table>
    </div>
  );
};
