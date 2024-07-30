import { User } from "@/app/lib/auth.action";
import { Invoice } from "@/app/lib/invoices.action";
import { TableRow, TableCell, Button } from "flowbite-react";
import Link from "next/link";

export const UserTableItem = ({
  user
}: {
  user: User;
}) => {
  return (
    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <TableCell>
        <p className="uppercase text-xs">{user?.email}</p>
      </TableCell>
      <TableCell>
        <p className="uppercase text-xs">{user?.otherNames}</p>
      </TableCell>
      <TableCell>
        <p className="uppercase text-xs">
          {user?.lastName}
        </p>
      </TableCell>
      <TableCell>
        <p className="text-orange-500 uppercase text-[0.7rem]">
          {user?.role}
        </p>
      </TableCell>
      <TableCell>
      <Button
            size="xs"
            color="dark"
          >
            Disable
          </Button>
      </TableCell>
    </TableRow>
  );
};
