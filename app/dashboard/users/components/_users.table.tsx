import { getAllInvoicesAsync, Invoice } from "@/app/lib/invoices.action";
import {
  Table,
  TableHead,
  TableHeadCell,
  TableBody,
} from "flowbite-react";
import { UserTableItem } from "./_user.tableItem";
import { getAllCustomersAsync } from "@/app/lib/customer.action";
import { getUsersAsync, User } from "@/app/lib/auth.action";

export const UsersTable = async () => {

  const res = await getUsersAsync()
  var users: User[] = JSON.parse(JSON.stringify(res))

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableHeadCell>Email</TableHeadCell>
          <TableHeadCell>Othernames</TableHeadCell>
          <TableHeadCell>Lastnamef</TableHeadCell>
          <TableHeadCell>Role</TableHeadCell>
          <TableHeadCell>...</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {
            users?.length && (
              users.map((user, key) => (
                <UserTableItem user={user} key={key} />
              ))
            )
          }
        </TableBody>
      </Table>
    </div>
  );
};
