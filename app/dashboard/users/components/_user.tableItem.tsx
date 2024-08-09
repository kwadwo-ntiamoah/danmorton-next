import { User } from "@/app/lib/auth.action";
import { Invoice } from "@/app/lib/invoices.action";
import { TableRow, TableCell, Button } from "flowbite-react";
import Link from "next/link";

export const UserTableItem = ({
  user,
  index
}: {
  index: number
  user: User;
}) => {
  return (
    <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <TableCell>
        <p className="uppercase text-xs">{index + 1}</p>
      </TableCell>
      <TableCell>
        <p className="text-xs">{user?.email}</p>
      </TableCell>
      <TableCell>
        <p className="uppercase text-xs">
          {user?.fullName}
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
