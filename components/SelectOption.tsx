import React from "react";

const SelectOption = ({
  label,
  icon,
  placeholder,
  required = false,
  endIcon,
}: {
  label: string;
  icon?: React.ReactNode;
  placeholder: string;
  required?: boolean;
  endIcon?: React.ReactNode;
}) => {
  return (
    <div className="space-y-2 w-full">
      <p>
        {label}
        {required && <span className="text-red-500">*</span>}
      </p>
      <div
        className={`flex gap-2 border p-2 rounded-lg shadow-sm w-full items-center`}
      >
        {icon}
        <select className="focus:border-none focus:outline-none pr-4 py-1 w-full">
          <option value="" disabled selected hidden className="text-slate-400">
            {placeholder}
          </option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        {endIcon}
      </div>
    </div>
  );
};

export default SelectOption;
