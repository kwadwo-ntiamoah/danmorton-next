import { deleteItemCatalogAsync } from "@/app/lib/catalogs.action"
import { Button } from "flowbite-react"
import { useRouter } from "next/navigation"

export const DeleteItemButton = ({ id }: { id: string }) => {
    return (
        <form action={async () => {
            'use server'
            await deleteItemCatalogAsync(id)
        }}>
            <Button type="submit" size="xs" color="red">
            Delete
          </Button>
        </form>
    )
}