import React from "react";

export const ShopIconSVG = (props: any) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.5 6H22.5V10L21.8008 10.4195C20.6924 11.0846 19.3076 11.0846 18.1992 10.4195L17.5 10L16.8008 10.4195C15.6924 11.0846 14.3077 11.0846 13.1993 10.4195L12.5 10L11.8007 10.4195C10.6923 11.0846 9.30765 11.0846 8.19925 10.4195L7.5 10L6.80075 10.4195C5.69235 11.0846 4.30765 11.0846 3.19927 10.4195L2.5 10V6Z"
        fill="white"
        stroke={props.color || "#000"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 11.2444V22H20.5V11"
        stroke={props.color || "#000"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 5.9111V2H20.5V6"
        stroke={props.color || "#000"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 16H10V22H15V16Z"
        stroke={props.color || "#000"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
