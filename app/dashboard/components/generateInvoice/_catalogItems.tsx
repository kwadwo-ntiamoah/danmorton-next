"use client";

import {
  Item,
  ItemService,
  getItemsCatalogAsync,
} from "@/app/lib/catalogs.action";
import { CartItem, InvoiceItem } from "@/app/lib/invoices.action";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";

export const CatalogItems = ({
  resetStatus,
  changeResetStatus,
  setInvoiceItems,
}: {
  resetStatus: boolean;
  changeResetStatus: () => void;
  setInvoiceItems: (items: CartItem[]) => void;
}) => {
  const [items, setItems] = useState<Item[]>([]);
  const [selectedItems, setSelectedItems] = useState<CartItem[]>([]);

  const getItemsCatalog = async () => {
    var data = await getItemsCatalogAsync();
    setItems(data);
  };

  const addOrRemFromSelection = (items: CartItem[]) => {
    const existingMap = new Map(
      selectedItems.map((item) => [`${item.name}-${item.serviceType}`, item])
    );

    items.forEach((newItem) => {
      const key = `${newItem.name}-${newItem.serviceType}`;
      existingMap.set(key, newItem); // Replace or add the item
    });

    const updatedArray = Array.from(existingMap.values());

    setSelectedItems(updatedArray);
  };

  useEffect(() => {
    getItemsCatalog();
  }, []);

  useEffect(() => {
    if (resetStatus) {
      setSelectedItems([]);
      changeResetStatus();
    }
  }, [resetStatus]);

  useEffect(() => {
    setInvoiceItems(selectedItems);
  }, [selectedItems]);

  return (
    <>
      {items.map((item) => (
        <BasketItem
          changeResetStatus={changeResetStatus}
          addOrRemFromSelection={addOrRemFromSelection}
          resetStatus={resetStatus}
          item={item}
          key={item.id}
        />
      ))}
    </>
  );
};

const BasketItem = ({
  item,
  resetStatus,
  changeResetStatus,
  addOrRemFromSelection,
}: {
  item: Item;
  changeResetStatus: () => void;
  resetStatus: boolean;
  addOrRemFromSelection: (items: CartItem[]) => void;
}) => {
  const [quantity, setQuantity] = useState(0);
  const [services, setServices] = useState<BasketItemServiceProps[]>([]);

  const add = () => setQuantity(quantity + 1);

  const reduce = () => {
    setQuantity(quantity - 1);
    if (quantity <= 0) {
      setQuantity(0);
    }
  };

  const addService = (service: ItemService) => {
    var temp: BasketItemServiceProps = {
      name: service.name,
      amount: service.price.amount,
    };
    var tempServices = [...services];

    const index = tempServices.findIndex((s) => s.name === service.name);

    if (index > -1) {
      // Object exists, remove it
      tempServices.splice(index, 1);
    } else {
      // Object does not exist, add it
      tempServices.push(temp);
    }

    setServices(tempServices);
  };

  const listen = () => {
    let payloads: CartItem[] = [];

    services.forEach((service) => {
      var payload: CartItem = {
        name: item.name,
        quantity: quantity,
        description: item.name,
        serviceAmount: service.amount,
        serviceType: service.name,
      };

      const index = payloads.findIndex(
        (p) => p.name === payload.name && p.serviceType === payload.serviceType
      );
      if (index > -1) {
        // Object exists, remove it
        payloads.splice(index, 1);
      } else {
        // Object does not exist, add it
        payloads.push(payload);
      }
    });

    addOrRemFromSelection(payloads);
  };

  useEffect(() => {
    listen();
  }, [quantity, services]);

  useEffect(() => {
    if (resetStatus) {
      setQuantity(0);
      setServices([]);

      changeResetStatus()
    }
  }, [resetStatus]);

  return (
    <div className="w-full border rounded-md grid grid-cols-3 p-1 gap-2">
      <div className="select-none flex flex-col bg-slate-50 space-y-2 items-center justify-center border border-dashed rounded-md p-5">
        <Image
          src={item.image}
          width={32}
          height={5}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />
        <p className="text-xs text-center">{item.name}</p>
        {/* <p className="text-[10px] text-center">
        {item.price.currency} {item.price.amount}
      </p> */}
        <div className="flex items-center space-x-2">
          <HiMinus className="cursor-pointer" onClick={reduce} />
          <div className="border rounded-md px-2 py-1">{quantity}</div>
          <HiPlus className="cursor-pointer" onClick={add} />
        </div>
      </div>

      {/* services */}
      <div className="col-span-2 border rounded-md border-dashed px-4 py-2 flex flex-col space-y-2">
        <div className="grid grid-cols-2 gap-2">
          {item.services.map((service, index) => (
            <button
              key={index}
              onClick={() => addService(service)}
              type="button"
              className={clsx(
                "flex flex-col items-center px-5 py-2 text-sm font-medium text-center rounded-lg border hover:bg-slate-100",
                {
                  "bg-slate-600 text-white":
                    services.findIndex((s) => s.name === service.name) > -1,
                }
              )}
            >
              {service.name}
              <span className="inline-flex items-center justify-center w-auto h-auto py-1 px-2 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                {service.price.currency} {service.price.amount}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

interface BasketItemServiceProps {
  name: string;
  amount: number;
}
