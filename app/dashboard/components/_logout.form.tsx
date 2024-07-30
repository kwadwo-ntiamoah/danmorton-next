import { logoutAsync } from "@/app/lib/auth.action";
import { Button } from "flowbite-react";

export const LogoutForm = () => {
  return (
    <form action={logoutAsync} className="p-2">
      <Button size="sm" color="dark" className="w-full text-left" type="submit">
        Sign Out
      </Button>
    </form>
  );
};
