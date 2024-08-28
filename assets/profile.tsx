import React from "react";

export const ProfileIconSVG = (props: any) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.09151 13.2068C11.7805 13.2068 14.9335 13.7658 14.9335 15.9988C14.9335 18.2318 11.8015 18.8068 8.09151 18.8068C4.40151 18.8068 1.24951 18.2528 1.24951 16.0188C1.24951 13.7848 4.38051 13.2068 8.09151 13.2068Z"
        stroke={props.color || "#000"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.09151 10.0198C5.66951 10.0198 3.70551 8.05676 3.70551 5.63476C3.70551 3.21276 5.66951 1.24976 8.09151 1.24976C10.5125 1.24976 12.4765 3.21276 12.4765 5.63476C12.4855 8.04776 10.5355 10.0108 8.12251 10.0198H8.09151Z"
        stroke={props.color || "#000"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9831 8.88153C16.5841 8.65653 17.8171 7.28253 17.8201 5.61953C17.8201 3.98053 16.6251 2.62053 15.0581 2.36353"
        stroke={props.color || "#000"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.0954 12.7322C18.6464 12.9632 19.7294 13.5072 19.7294 14.6272C19.7294 15.3982 19.2194 15.8982 18.3954 16.2112"
        stroke={props.color || "#000"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
