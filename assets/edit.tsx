import React from "react";

export const EditIconSVG = (props: any) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14 9.16667V13.8333C14 14.2015 13.7015 14.5 13.3333 14.5H2.66667C2.29848 14.5 2 14.2015 2 13.8333V3.16667C2 2.79848 2.29848 2.5 2.66667 2.5H7.33333"
        stroke={props.color || "#242424"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.66663 9.40663V11.8333H7.10569L14 4.93603L11.565 2.5L4.66663 9.40663Z"
        fill="white"
        stroke={props.color || "#242424"}
        strokeLinejoin="round"
      />
    </svg>
  );
};
