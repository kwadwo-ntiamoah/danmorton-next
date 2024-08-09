import { Avatar, Button, Dropdown, DropdownDivider, DropdownHeader, DropdownItem, Navbar } from "flowbite-react";
import Image from "next/image";
import logo from "@/public/images/jemma.png";
import Link from "next/link";
import { ReactNode } from "react";
import { getSessionAsync } from "@/app/lib/auth.action";
import { LogoutForm } from "./_logout.form";

export const NavDetails = async () => {
    var session = await getSessionAsync()
  return (
    <Navbar fluid rounded border className="sticky top-0 z-10">
      <Link href="/" className="flex space-x-2">
        <Image
          src={logo}
          width={32}
          height={5}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />
        <span className="self-center whitespace-nowrap text-xl">Jemma</span>
      </Link>
      <div className="flex md:order-2">
      <Dropdown
      outline={false}
      arrowIcon={false}
      inline
      label={
        <div className="flex space-x-2 items-center">
          <div className="flex flex-col items-end">
            <p>
              {session?.fullName}
            </p>
            <p className="text-xs">{session.role}</p>
          </div>
          <Avatar
            alt="User settings"
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            rounded
          />
        </div>
      }
    >
      <DropdownHeader>
        <span className="block text-sm">
        {session?.fullName}
        </span>
        <span className="block truncate text-xs font-medium">
          {session.role}
        </span>
      </DropdownHeader>
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownDivider />
      <LogoutForm />
    </Dropdown>
      </div>
    </Navbar>
  );
};
