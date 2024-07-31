'use client'

import { HiFolderDownload } from "react-icons/hi";
import { Button } from "flowbite-react"
import { useState } from "react";
import { BasketItemsDrawer } from "./_basketItems.drawer";
import { BasketItem } from "@/app/lib/basket.action";

export const ViewBasketItemsButton = ({ basketItems }: { basketItems: BasketItem[] }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClose = () => {
      setIsOpen(false)
    }

    return (
        <>
        <Button size="xs" color="dark" onClick={() => setIsOpen(true)}>
          View
        </Button>

      <BasketItemsDrawer basketItems={basketItems} isOpen={isOpen} handleClose={handleClose} />
    </>
    )
}