import Link from "next/link";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { InvoiceCard, MakePaymentButton } from "./components";
import { Button } from "flowbite-react";
import { getInvoiceAsync, Invoice } from "@/app/lib/invoices.action";
import { InvoiceStatus, PaymentStatus } from "@/app/lib";
import notFoundImage from "@/public/images/empty.png"
import Image from "next/image";
import { getProductsCatalogAsync } from "@/app/lib/catalogs.action";

const InvoiceDetails = async ({ params }: { params: { id: string } }) => {
  const res = await getInvoiceAsync(params.id);
  if (res == null) {
    return (
      <div className="flex flex-col space-y-5 w-full justify-center items-center h-1/2">
        <Image 
          width={100}
          src={notFoundImage}
          alt="notfound.png"
        />
        <p>Sorry this invoice was not found</p>
      </div>
    )
  }

  var invoice: Invoice = JSON.parse(JSON.stringify(res));

  return (
    <div className="flex justify-center">
      <div className="lg:w-3/5 flex flex-col space-y-6">
        <div className="h-24 sticky top-0 inset-0 z-10 bg-white flex items-center">
          <div className="w-full flex space-x-8 items-end justify-between">
            <Link
              href="/dashboard/invoices"
              className="flex items-center space-x-2 cursor-pointer"
            >
              <HiOutlineChevronLeft />
              <p>Back</p>
            </Link>
            <div className="flex flex-col items-end">
              <p className="text-2xl text-black">
                Invoice # {invoice?.invoiceNumber}
              </p>
              <p>
                Invoice breakdown for basket
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-8">
          <div className="flex flex-col border rounded-lg p-10 space-y-8">
            <div className="flex items-end justify-between">
              <div className="flex flex-col">
                <p>Jemma Laundry</p>
                <p>156 Busia St, Odorkor</p>
                <p>Accra, Ghana</p>
              </div>
              <div className="flex flex-col items-end">
                <p>{invoice.billTo.name}</p>
                <p>{invoice?.billTo?.address}</p>
                <p>{invoice?.billTo?.contact}</p>
              </div>
            </div>

            <InvoiceCard invoice={invoice!} />
          </div>

          <div className="flex w-full justify-between">
          <div className="flex justify-between space-x-2 pb-10">
            {invoice?.paymentStatus != PaymentStatus.FULLY_PAID && (
              <div className="flex space-x-2">
                <Button color="dark">Cancel</Button>
                <MakePaymentButton invoice={invoice} />
              </div>
            )}
          </div>

          <div>
          <Button>Download Receipt</Button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
