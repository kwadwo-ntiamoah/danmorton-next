
import {
  Table,
  TableHead,
  TableHeadCell,
  TableBody,
} from "flowbite-react";
import { CatalogItem, getItemsCatalogAsync } from "@/app/lib/catalogs.action";
import { CatalogTableItem } from "./_catalogtableItem";

export const CatalogTable = async () => {

  const res = await getItemsCatalogAsync()
  var items: CatalogItem[] = JSON.parse(JSON.stringify(res))

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableHeadCell>#</TableHeadCell>
          <TableHeadCell>Image</TableHeadCell>
          <TableHeadCell>Name</TableHeadCell>
          <TableHeadCell>Price</TableHeadCell>
          <TableHeadCell>...</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {
            items?.length && (
              items.map((item, index) => (
                <CatalogTableItem item={item} id={index + 1} key={item.id} />
              ))
            )
          }
        </TableBody>
      </Table>
    </div>
  );
};
