import { getAllInvoicesAsync, Invoice } from "@/app/lib/invoices.action";
import {
  Table,
  TableHead,
  TableHeadCell,
  TableBody,
} from "flowbite-react";
import { UserTableItem } from "./_user.tableItem";
import { getUsersAsync, User } from "@/app/lib/auth.action";

export const UsersTable = async () => {

  const res = await getUsersAsync()
  var users: User[] = JSON.parse(JSON.stringify(res))

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableHeadCell>#</TableHeadCell>
          <TableHeadCell>Email</TableHeadCell>
          <TableHeadCell>FullName</TableHeadCell>
          <TableHeadCell>Role</TableHeadCell>
          <TableHeadCell>...</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {
            users?.length && (
              users.map((user, key) => (
                <UserTableItem index={key} user={user} key={key} />
              ))
            )
          }
        </TableBody>
      </Table>
    </div>
  );
};
