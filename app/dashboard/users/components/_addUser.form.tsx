"use client";

import { FormState } from "@/app/lib";
import { addUserAsync } from "@/app/lib/auth.action";
import { ErrorAlert } from "@/app/ui/common/alerts";
import { Label, Checkbox, Button, Spinner } from "flowbite-react";
import { useFormState, useFormStatus } from "react-dom";

export const AddUserForm = () => {
  const [state, formAction] = useFormState<FormState, FormData>(addUserAsync, {
    error: undefined,
  });

  return (
    <form className="flex w-full flex-col gap-5" action={formAction}>
      {state?.error && <ErrorAlert message={state.error!} />}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email" />
        </div>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="form-control"
          placeholder="name@jemma.com"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Fullname" />
        </div>
        <input
          id="fullName"
          name="fullName"
          required
          className="form-control"
          placeholder="Nana Kwaku"
        />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Role" />
        </div>
        <select name="role" id="role" className="form-control" defaultValue="" required>
            <option value="" disabled>-- Select Role --</option>
            <option value="Administrator">Administrator</option>
            <option value="Staff">Staff</option>
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
