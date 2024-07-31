import { User } from "@/app/lib/auth.action";
import { Basket } from "@/app/lib/basket.action";
import { CatalogItem } from "@/app/lib/catalogs.action";
import { TableRow, TableCell, Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { ViewBasketItemsButton } from "./_viewItemsDrawer.button";

export const BasketTableItem = ({
  basket,
  id,
}: {
  basket: Basket;
  id: string | number;
}) => {
  return (
    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <TableCell>
        <p className="uppercase text-xs">{id}</p>
      </TableCell>
      <TableCell>
        <p className="uppercase text-xs">{basket?.basketNumber}</p>
      </TableCell>
      <TableCell>
        <p className="text-orange-500 uppercase text-[0.7rem]">
          {basket?.status == 0
            ? "pending"
            : basket.status == 1
            ? "in-progress"
            : "completed"}
        </p>
      </TableCell>
      <TableCell>
        <p className="uppercase text-xs">{basket?.basketItems.length}</p>
      </TableCell>
      <TableCell>
        <ViewBasketItemsButton basketItems={basket?.basketItems} />
      </TableCell>
    </TableRow>
  );
};
