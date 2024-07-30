import { Customer } from "@/app/lib/customer.action";
import { Label } from "flowbite-react";
import { useEffect, useState } from "react";

export const GenerateInvoiceCustomerForm = ({ setCustomerDetails }: { setCustomerDetails: (customer: Customer) => void }) => {

  const [data, setData] = useState<Customer>({ name: "", email: "", phone: "" })

  useEffect(() => {
    setCustomerDetails(data)
  }, [data])

  return (
    <div className="grid grid-cols-2 gap-5 py-5 border-y">
      <div className="col-span-2">
        <div className="mb-2 block">
          <Label htmlFor="email" value="Customer Name" />
        </div>
        <input
          id="name"
          name="name"
          className="form-control"
          onChange={e => setData({...data, name: e.target.value})}
          value={data.name}
          placeholder="name@flowbite.com"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Customer email" />
        </div>
        <input
          type="email"
          id="email"
          name="email"
          onChange={e => setData({...data, email: e.target.value})}
          value={data.email}
          className="form-control"
          placeholder="name@flowbite.com"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Customer Phone" />
        </div>
        <input
          type="text"
          id="name"
          name="name"
          onChange={e => setData({...data, phone: e.target.value})}
          value={data.phone}
          className="form-control"
          placeholder="name@flowbite.com"
        />
      </div>
    </div>
  );
};
