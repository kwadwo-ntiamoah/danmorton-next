'use client'

import { CatalogItem, getItemsCatalogAsync } from "@/app/lib/catalogs.action";
import { InvoiceItem } from "@/app/lib/invoices.action";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";

export const CatalogItems = ({ setInvoiceItems }: { setInvoiceItems: (items: InvoiceItem[]) => void }) => {
  const [items, setItems] = useState<CatalogItem[]>([])
  const [selectedItems, setSelectedItems] = useState<InvoiceItem[]>([])

  const getItemsCatalog = async () => {
    var data = await getItemsCatalogAsync()
    setItems(data)
  }

  const addOrRemFromSelection = (item: InvoiceItem) => {
    if (item.quantity < 1) {
      let itemList = selectedItems.filter((temp) => temp.itemId !== item.itemId)
      setSelectedItems(itemList)
    }else {
      // remove previous and add new
      let itemList = selectedItems.filter((temp) => temp.itemId !== item.itemId)
      setSelectedItems([...itemList, item])
    }
  }

  useEffect(() => {
    getItemsCatalog()
  }, [])

  useEffect(() => {
    setInvoiceItems(selectedItems)
  }, [selectedItems])

  return (
    <>
      {items.map((item) => (
        <BasketItem addOrRemFromSelection={addOrRemFromSelection} item={item} key={item.id} />
      ))}
    </>
  );
};

const BasketItem = ({ item, addOrRemFromSelection }: { item: CatalogItem, addOrRemFromSelection: (item: InvoiceItem) => void }) => {
  const [quantity, setQuantity] = useState(0)

  const add = () => setQuantity(quantity + 1)

  const reduce = () => {
    setQuantity(quantity - 1)
    if (quantity <= 0) {
      setQuantity(0)
    }
  }

  const listen = () => {
    var payload: InvoiceItem = {
      itemId: item.id,
      quantity: quantity,
      price: item.price.amount * quantity
    }

    addOrRemFromSelection(payload)
  }

  useEffect(() => {
    listen()
  }, [quantity])

  return (
    <div className="select-none flex flex-col space-y-2 items-center justify-center border rounded-md p-5">
      <Image
        src={item.imagePath}
        width={32}
        height={5}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <p className="text-xs text-center">{item.name}</p>
      <p className="text-[10px] text-center">
        {item.price.currency} {item.price.amount}
      </p>
      <div className="flex items-center space-x-2">
        <HiMinus className="cursor-pointer" onClick={reduce}/>
        <div className="border rounded-md px-2 py-1">{quantity}</div>
        <HiPlus className="cursor-pointer" onClick={add}/>
      </div>
    </div>
  );
};
