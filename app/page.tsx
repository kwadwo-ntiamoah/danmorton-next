import Image from "next/image";
import laundryBg from "@/public/images/laundry_doodle.png"
import logo from "@/public/images/jemma.png";

import { LoginForm } from "./components";
import { getSessionAsync } from "./lib/auth.action";

export default async function Home() {

  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="grid grid-cols-3 h-full w-full">
        <div className="col-span-2 bg-[#EFB542]">
          <Image 
            width={200}
            height={200 / (16/9)}
            layout="responsive"
            className="opacity-5"
            src={laundryBg}
            alt="bg.png"
          />
        </div>
        <div className="relative p-12 flex h-screen items-center">
      <div className="absolute top-5">
        <div className="flex space-x-2 items-center">
          <Image src={logo} alt="logo" height={32} width={32} />
          <p className="text-xl text-black">Jemma</p>
        </div>
      </div>

      <LoginForm />

      <div className="absolute w-full bottom-5 left-0 flex items-center justify-center">
        <p className="text-slate-500 text-xs">Jemma &#169; 2024</p>
      </div>
    </div>
      </div>
    </div>
  );
}
