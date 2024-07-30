'use client'

import { Label, Checkbox, Button, Spinner } from "flowbite-react";
import { loginAsync } from "../lib/auth.action";
import { useFormState, useFormStatus } from "react-dom";
import { FormState } from "../lib";
import { ErrorAlert } from "../ui/common/alerts";

export const LoginForm = () => {
  const [state, formAction] = useFormState<FormState, FormData>(loginAsync, {
    error: undefined,
  });

  return (
    <form className="flex w-full flex-col gap-5" action={formAction}>
      {state.error && <ErrorAlert message={state.error!} />}
      <div>
        <p className="text-2xl text-black">Login to Continue</p>
        <p>Provide valid Email/Password</p>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" />
        </div>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="form-control"
          placeholder="name@flowbite.com"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Your password" />
        </div>
        <input
          type="password"
          id="password"
          name="password"
          required
          className="form-control"
          placeholder="************"
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" color="dark" />
        <Label htmlFor="remember">Remember me</Label>
      </div>

      <LoginButton />
    </form>
  );
};

const LoginButton = () => {
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
