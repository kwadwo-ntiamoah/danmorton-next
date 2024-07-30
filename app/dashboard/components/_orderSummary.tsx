import Image from "next/image"
import PendingIcon from "@/public/images/pending.png";
import SuccessIcon from "@/public/images/passed.png";
import CancelledIcon from "@/public/images/cancelled.png";

export const OrderSummary = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-8 border-b">
        <div className="flex space-x-3">
          <Image
            src={SuccessIcon}
            width={42}
            height={5}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <div className="flex-col">
            <p className="text-xl text-black">12 new orders</p>
            <p className="text-xs">Awaiting Processing</p>
          </div>
        </div>

        <div className="flex space-x-3">
          <Image
            src={PendingIcon}
            width={42}
            height={5}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <div className="flex-col">
            <p className="text-xl text-black">5 orders</p>
            <p className="text-xs">Pending Approval</p>
          </div>
        </div>

        <div className="flex space-x-3">
          <Image
            src={CancelledIcon}
            width={40}
            height={5}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <div className="flex-col">
            <p className="text-xl text-black">10 orders</p>
            <p className="text-xs">Canceled</p>
          </div>
        </div>
      </div>
    )
}