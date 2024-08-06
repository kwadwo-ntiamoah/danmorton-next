import { useEffect } from "react";

export const InvoiceService = ({ setSelectedService }: { setSelectedService: (service: string) => void }) => {

  useEffect(() => {
    setSelectedService("a9ef39ff-2a3e-4edb-a745-0dc9e1adddcd")
  }, [])

  return (
    <>
      <p className="hidden border-t pt-5">Select Service</p>
      <div className="grid grid-cols-2 gap-5">
        <div className="border-2 border-blue-500 rounded-lg p-5">
          <p className="text-center">Dry Cleaning</p>
        </div>
        <div className="border-2 rounded-lg p-5">
          <p className="text-center">Pressing & Ironing</p>
        </div>
      </div>
    </>
  );
};
