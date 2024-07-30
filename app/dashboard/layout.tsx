import { NavBar, SideBar } from "./components";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen flex-col ">
      <NavBar />
      <div className="h-full flex overflow-hidden">
        <SideBar />
        <div className="flex-grow  md:overflow-y-auto ">{children}</div>
      </div>
    </div>
  );
};


export default DashboardLayout