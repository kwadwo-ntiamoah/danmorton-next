
import {
  Table,
  TableHead,
  TableHeadCell,
  TableBody,
} from "flowbite-react";
import { getItemsCatalogAsync, getProductsCatalogAsync, Item, Product } from "@/app/lib/catalogs.action";
import { CatalogTableItem } from "./_catalogtableItem";

export const CatalogTable = async () => {

  const res = await getItemsCatalogAsync()
  const prodRes = await getProductsCatalogAsync()

  var items: Item[] = JSON.parse(JSON.stringify(res))
  var products: Product[] = JSON.parse(JSON.stringify(prodRes))

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableHeadCell>#</TableHeadCell>
          <TableHeadCell>Image</TableHeadCell>
          <TableHeadCell>Name</TableHeadCell>
          {
            products.length > 0 && products.map((product, index) => (
              <TableHeadCell key={index}>{product.name}</TableHeadCell>
            ))
          }
          <TableHeadCell>...</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {
            items?.length > 0 && (
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
