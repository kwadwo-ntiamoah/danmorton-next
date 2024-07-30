import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

export const ErrorAlert = (props: { message: string }) => {
  return (
    <Alert color="failure" icon={HiInformationCircle}>
      <span className="font-medium">Error alert!</span> {props.message}
    </Alert>
  );
};

export const SuccessAlert = (props: { message: string }) => {
  return (
    <Alert color="success" icon={HiInformationCircle}>
      <span className="font-medium">Success alert!</span> {props.message}
    </Alert>
  );
};
