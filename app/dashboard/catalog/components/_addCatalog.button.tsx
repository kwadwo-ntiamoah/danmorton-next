'use client'

import { HiFolderDownload } from "react-icons/hi";
import { Button } from "flowbite-react"
import { useState } from "react";
import { AddCatalogDrawer } from "./_addCatalog.drawer";
import { Product } from "@/app/lib/catalogs.action";

export const AddCatalogButton = ({ products }: { products: Product[] }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClose = () => {
      setIsOpen(false)
    }

    return (
        <>
      <Button color="dark" onClick={() => setIsOpen(true)}>
        <HiFolderDownload className="mr-2 h-5 w-5" />
        Add Item
      </Button>

      <AddCatalogDrawer products={products} isOpen={isOpen} handleClose={handleClose} />
    </>
    )
}