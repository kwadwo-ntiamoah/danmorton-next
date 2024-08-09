import { getProductsCatalogAsync, Product } from "@/app/lib/catalogs.action";
import { OpenInvoiceDrawerButton } from "../components";
import { AddCatalogButton } from "./components/_addCatalog.button";
import { CatalogTable } from "./components/_catalog.table";

const Page = async () => {
  const res = await getProductsCatalogAsync()
  var products: Product[] = JSON.parse(JSON.stringify(res))

  return (
    <div className="flex flex-col space-y-10 p-8">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <p className="text-2xl text-black">Catalog</p>
          <p>Add Service Items to your catalog</p>
        </div>

      <AddCatalogButton products={products}/>
      </div>

    <CatalogTable />
    </div>
  );
};

export default Page;
