import React from "react";

export const ChevronRightIconSVG = (props: any) => {
  return (
    <svg
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 0.666749L5 4.66675L1 8.66675"
        stroke={props.color || "#fff"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
