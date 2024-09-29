import clsx from "clsx";
import * as React from "react";
import { Loader } from "./Loader";



interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  loading?: boolean;
  children: React.ReactNode;
}

export const Button = ({
  startIcon,
  endIcon,
  children,
  loading,
  className,
  ...buttonProps
}: Props) => {
  return (
    <button
      className={`inline-flex justify-center items-center py-2 px-3 space-x-2  bg-blue-500  shadow active:bg-blue-400 rounded-xl text-white text-sm font-semibold disabled:bg-opacity-50 hover:(transform ) ${className}`}
      {...buttonProps}
    >
      {startIcon && <div className="mr-2">{startIcon}</div>}
      {children}
      {loading && <Loader className="text-white ml-3 w-4 h-4" />}

      {!loading && endIcon && <div>{endIcon}</div>}
    </button>
  );
};

export const DangerButton = ({ className, ...props }: Props) => (
  <Button
    className={clsx("!bg-red-600 hover:bg-red-700", className)}
    {...props}
  />
);

export const ConfirmButton = ({
  onConfirm,
  disabled,
  loading,
  children,
  ...props
}: {
  onConfirm: () => void;
  disabled?: boolean;
  loading?: boolean;
  children: string;
}) => {
  return (
    <button
      onClick={onConfirm}
      type="button"
      className={`w-full inline-flex justify-center items-center rounded-md border border-transparent shadow-md px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm
        ${disabled && "bg-opacity-50 cursor-not-allowed hover:bg-opacity-75"}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
      {loading && <Loader className="text-white ml-3 w-4 h-4" />}
    </button>
  );
};

export const CancelButton = ({
  disabled,
  text,
  onCancel,
}: {
  disabled?: boolean;
  text?: string;
  onCancel: () => void;
}) => (
  <button
    disabled={disabled}
    onClick={onCancel}
    type="button"
    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-md px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
  >
    {text ?? "Cancel"}
  </button>
);
