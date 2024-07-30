'use client'

import { HiFolderDownload } from "react-icons/hi";
import { Button } from "flowbite-react"
import { useState } from "react";
import { AddUserDrawer } from "./_addUser.drawer";

export const AddUserButton = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClose = () => {
      setIsOpen(false)
    }

    return (
        <>
      <Button color="dark" onClick={() => setIsOpen(true)}>
        <HiFolderDownload className="mr-2 h-5 w-5" />
        Add User
      </Button>

      <AddUserDrawer isOpen={isOpen} handleClose={handleClose} />
    </>
    )
}