import { User } from "@/app/lib/auth.action";
import { CatalogItem } from "@/app/lib/catalogs.action";
import { TableRow, TableCell, Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export const CatalogTableItem = ({
  item, id
}: {
  item: CatalogItem;
  id: string | number
}) => {
  return (
    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <TableCell>
        <p className="uppercase text-xs">
          {id}
        </p>
      </TableCell>
      <TableCell>
        <p className="uppercase text-xs">
        <Image
        src={item.imagePath}
        width={32}
        height={5}
        className="hidden md:block"
        alt={item.name}
      />
        </p>
      </TableCell>
      <TableCell>
        <p className="text-orange-500 uppercase text-[0.7rem]">
          {item?.name}
        </p>
      </TableCell>
      <TableCell>
        <p className="uppercase text-xs">
          {item?.price.currency} {item?.price.amount}
        </p>
      </TableCell>
      <TableCell>
      <div className="flex space-x-2">
      <Button
            size="xs"
            color="dark"
          >
            Edit
          </Button>
          <Button
            size="xs"
            color="red"
          >
            Delete
          </Button>
      </div>
      </TableCell>
    </TableRow>
  );
};
