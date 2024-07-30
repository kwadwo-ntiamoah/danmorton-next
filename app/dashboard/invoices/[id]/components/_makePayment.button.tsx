'use client'

import { HiFolderDownload } from "react-icons/hi";
import { Button } from "flowbite-react"
import { useState } from "react";
import { MakePaymentDrawer } from "./_makePayment.drawer";
import { Invoice } from "@/app/lib/invoices.action";

export const MakePaymentButton = ({ invoice }: { invoice: Invoice }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClose = () => {
      setIsOpen(false)
    }

    return (
        <>
      <Button color="dark" onClick={() => setIsOpen(true)}>
        <HiFolderDownload className="mr-2 h-5 w-5" />
        Make Payment
      </Button>

      <MakePaymentDrawer invoice={invoice} isOpen={isOpen} handleClose={handleClose} />
    </>
    )
}