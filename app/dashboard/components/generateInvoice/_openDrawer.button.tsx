"use client";

import { Button } from "flowbite-react";
import { useState } from "react";
import { HiFolderDownload } from "react-icons/hi";
import { InvoiceDrawer } from "./_drawer";

export const OpenInvoiceDrawerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button color="dark" onClick={() => setIsOpen(true)}>
        <HiFolderDownload className="mr-2 h-5 w-5" />
        Generate Invoice
      </Button>

      <InvoiceDrawer isOpen={isOpen} handleClose={handleClose} />
    </>
  );
};
