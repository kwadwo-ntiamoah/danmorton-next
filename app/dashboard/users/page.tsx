import { OpenInvoiceDrawerButton } from "../components";
import { AddUserButton } from "./components/_addUser.button";
import { UsersTable } from "./components/_users.table";

const Page = async () => {
  return (
    <div className="flex flex-col space-y-10 p-8">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <p className="text-2xl text-black">Users</p>
          <p>Manage your users</p>
        </div>

      <AddUserButton />
      </div>

    <UsersTable />
    </div>
  );
};

export default Page;
