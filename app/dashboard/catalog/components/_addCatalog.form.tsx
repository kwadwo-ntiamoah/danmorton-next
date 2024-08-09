"use client";

import { FormState } from "@/app/lib";
import { addUserAsync } from "@/app/lib/auth.action";
import {
  addItemCatalogAsync,
  ItemService,
  Product,
} from "@/app/lib/catalogs.action";
import { ErrorAlert } from "@/app/ui/common/alerts";
import { Label, Checkbox, Button, Spinner } from "flowbite-react";
import { FormEvent, useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

export const AddCatalogForm = ({ products }: { products: Product[] }) => {
  const [services, setServices] = useState<ItemService[]>([]);

  const updateItemWithServices = addItemCatalogAsync.bind(null, services);

  const [state, formAction] = useFormState<FormState, FormData>(
    updateItemWithServices,
    {
      error: undefined,
    }
  );

  const updateServicePrice = (serviceName: string, newPrice: string) => {
    const updatedServices = services.map(service => {
      return service.name == serviceName ? { ...service, price: { ...service.price, amount: parseFloat(newPrice) } } : service
    })

    setServices(updatedServices)
  }

  useEffect(() => {
    // create services with product
    var tempServices: ItemService[] = [];

    products.forEach(product => {
      var item: ItemService = {
        name: product.name,
        price: {
          amount: 0.00,
          currency: "GHS"
        }
      }

      tempServices.push(item)
    })

    setServices(tempServices)

  }, [])

  return (
    <form className="flex w-full flex-col gap-5" action={formAction}>
      {state?.error && <ErrorAlert message={state.error!} />}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Item" />
        </div>
        <input
          id="name"
          name="name"
          required
          className="form-control"
          placeholder="Shirt"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="imagePath" value="Image" />
        </div>
        <input
          id="image"
          name="image"
          required
          className="form-control"
          placeholder="https://res.cloudinary.com/jojo/blouse.png"
        />
      </div>

      <div className="flex flex-col space-y-5">
        {
          services.length > 0 && services.map((service, index) => (
            <div className="w-full grid grid-cols-2 space-x-2" key={index}>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor={service.name + "_service"} value="Service" />
                </div>
                <input
                  id={service.name}
                  name={service.name}
                  required
                  className="form-control"
                  defaultValue={service.name}
                  disabled
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="amount" value="Amount" />
                </div>
                <input
                  type="number"
                  id={service.name + "_amount"}
                  name={service.name + "_amount"}
                  defaultValue={service?.price.amount}
                  onChange={(e) => updateServicePrice(service.name, e.target.value)}
                  required
                  className="form-control"
                  placeholder="0.00"
                />
              </div>
            </div>
          ))
        }
      </div>

      <AddUserBtn />
    </form>
  );
};

const AddUserBtn = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      color="dark"
      type="submit"
      className="w-full"
      isProcessing={pending}
      disabled={pending}
    >
      Submit
    </Button>
  );
};
