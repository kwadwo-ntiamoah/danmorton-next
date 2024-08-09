'use client'

import { FormState, PaymentType } from "@/app/lib";
import { Invoice } from "@/app/lib/invoices.action";
import { makePaymentAsync } from "@/app/lib/payments.action";
import { ErrorAlert } from "@/app/ui/common/alerts";
import { Button, Label } from "flowbite-react";
import { useFormState, useFormStatus } from "react-dom";

export const PaymentForm = ({ invoice }: { invoice: Invoice }) => {
    const [state, formAction] = useFormState<FormState, FormData>(makePaymentAsync, {
        error: undefined,
      });

  return (
    <form className="flex w-full flex-col gap-5" action={formAction}>
      { state.error && <ErrorAlert message={state.error} /> }
      <div>
        <p className="text-2xl text-black">Accept Payment</p>
        <p>Provide payment details</p>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="invoice" value="# Invoice" />
        </div>
        <input
          id="invoiceNumber"
          name="invoiceNumber"
          value={invoice?.invoiceNumber}
          className="form-control"
          placeholder="name@flowbite.com"
          disabled
        />
      </div>
      <div>
        <input
          id="invoiceId"
          name="invoiceId"
          value={invoice?.id}
          className="form-control"
          type="hidden"
        />
        <input
          id="paidBy"
          name="paidBy"
          value={invoice?.billTo.name}
          className="form-control"
          type="hidden"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="discount" value="Discount %" />
        </div>
        <input
          id="discount"
          name="discount"
          value={invoice?.discount}
          className="form-control"
          placeholder="name@flowbite.com"
          disabled
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="password"
            value={`Amount to pay (${invoice?.totalAmount.currency})`}
          />
        </div>
        <input
          type="number"
          id="amount"
          name="amount"
          max={(invoice?.totalAmount.amount - invoice?.amountPaid.amount).toString()}
          min = "0"
          className="form-control"
          defaultValue={invoice?.totalAmount.amount}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="paymentMethod" value="Payment Method" />
        </div>
        <select
          name="paymentMethod"
          id="paymentMethod"
          className="form-control"
          defaultValue=""
          required
        >
          <option value="" disabled>
            -- Select Payment Method --
          </option>
          <option value={PaymentType.CASH}>Cash</option>
          <option value={PaymentType.MOBILE_MONEY}>Mobile Money</option>
          <option value={PaymentType.BANK_TRANSFER}>Bank Transfer</option>
        </select>
      </div>

      <MakePaymentButton />
    </form>
  );
};


const MakePaymentButton = () => {
    const { pending } = useFormStatus();
  
    return (
      <Button
          color="dark"
          type="submit"
          className="w-full"
          isProcessing={pending}
          disabled={pending}
        >
          Submit
        </Button>
    );
  };
  