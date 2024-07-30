"use client";

import { FormState } from "@/app/lib";
import { addUserAsync } from "@/app/lib/auth.action";
import { addItemCatalogAsync } from "@/app/lib/catalogs.action";
import { ErrorAlert } from "@/app/ui/common/alerts";
import { Label, Checkbox, Button, Spinner } from "flowbite-react";
import { useFormState, useFormStatus } from "react-dom";

export const AddCatalogForm = () => {
  const [state, formAction] = useFormState<FormState, FormData>(addItemCatalogAsync, {
    error: undefined,
  });

  return (
    <form className="flex w-full flex-col gap-5" action={formAction}>
      {state?.error && <ErrorAlert message={state.error!} />}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Item" />
        </div>
        <input
          id="name"
          name="name"
          required
          className="form-control"
          placeholder="Shirt"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="amount" value="Unit Price" />
        </div>
        <input
          id="amount"
          name="amount"
          required
          className="form-control"
          placeholder="2"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="imagePath" value="ImagePath" />
        </div>
        <input
          id="imagePath"
          name="imagePath"
          required
          className="form-control"
          placeholder="https://res.cloudinary.com/jojo/blouse.png"
        />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="currency" value="Currency" />
        </div>
        <select name="currency" id="currency" className="form-control" defaultValue="" required>
            <option value="" disabled>-- Select Currency --</option>
            <option value="GHS">GHS</option>
        </select>
      </div>

      <AddUserBtn />
    </form>
  );
};

const AddUserBtn = () => {
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
