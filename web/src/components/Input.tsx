import { WarningIcon } from "@phosphor-icons/react";

interface InputProps {
  placeHolder: string;
  hasLabel?: Boolean;
  label?: string;
  title: string;
  isError?: Boolean;
  errorMessage?: string;
}

export function Input({
  placeHolder,
  title,
  isError,
  errorMessage,
  label,
  hasLabel,
}: InputProps) {
  return (
    <div className="group flex flex-col">
      <span className="group-focus-within:text-blue-base text-xxs mb-2 text-gray-500 group-focus-within:font-bold">
        {title.toUpperCase()}
      </span>
      <div className="relative">
        {hasLabel && (
          <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-sm text-gray-500">
            {label}
          </span>
        )}
        <input
          type="text"
          className={`focus:border-blue-base group-focus-within:border-blue-base h-12 w-80 rounded-lg border-2 bg-gray-300 text-gray-900 focus:outline-none ${
            isError ? "border-danger text-blue-base" : "border-gray-300"
          } ${hasLabel ? "pl-10" : "pl-4"}`}
          placeholder={placeHolder}
          title={title}
        />
      </div>
      {isError && (
        <div className="text-danger mt-2 flex items-center gap-2">
          <WarningIcon className="h-8 w-4" />
          <span className="text-base text-gray-500">
            {errorMessage ? errorMessage : "Error message"}
          </span>
        </div>
      )}
    </div>
  );
}
