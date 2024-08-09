import { Item } from "@/app/lib/catalogs.action";
import { TableRow, TableCell, Button } from "flowbite-react";
import Image from "next/image";
import { DeleteItemButton } from "./_deleteItem.button";

export const CatalogTableItem = ({
  item,
  id,
}: {
  item: Item;
  id: string | number;
}) => {
  return (
    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <TableCell>
        <p className="uppercase text-xs">{id}</p>
      </TableCell>
      <TableCell>
        <p className="uppercase text-xs">
          <Image
            src={item.image}
            width={32}
            height={5}
            className="hidden md:block"
            alt={item.name}
          />
        </p>
      </TableCell>
      <TableCell>
        <p className="text-orange-500 uppercase text-[0.7rem]">{item?.name}</p>
      </TableCell>
      {item.services.map((service, index) => (
        <TableCell key={index}>
           <p className="uppercase text-sm">{service?.price.currency} {service?.price.amount}</p>
        </TableCell>
      ))}

      <TableCell>
        <div className="flex space-x-2">
          <Button size="xs" color="dark">
            Edit
          </Button>
          <DeleteItemButton id={item.id} />
        </div>
      </TableCell>
    </TableRow>
  );
};
