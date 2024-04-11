import React from "react";

const InputField = ({
  label,
  icon,
  placeholder,
  type = "text",
  required = false,
  endIcon,
  multiline = false,
}: {
  label: string;
  icon?: React.ReactNode;
  placeholder: string;
  type?: string;
  required?: boolean;
  endIcon?: React.ReactNode;
  multiline?: boolean;
}) => {
  return (
    <div className="space-y-2 w-full">
      <p>
        {label}
        {required && <span className="text-red-500">*</span>}
      </p>
      <div
        className={`flex gap-2 border p-2 rounded-lg shadow-sm w-full ${
          multiline ? "items-start" : "items-center"
        }`}
      >
        {icon}
        {multiline ? (
          <textarea
            placeholder={placeholder}
            className="focus:border-none focus:outline-none pr-4 py-1 w-full resize-none"
            rows={4}
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            className="focus:border-none focus:outline-none pr-4 py-1 w-full"
          />
        )}
        {endIcon}
      </div>
    </div>
  );
};

export default InputField;
