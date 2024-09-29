import React from "react";
import { textColorInDarkMode } from "../../utils/style";

const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={`w-5 h-5 absolute left-2.5 top-3.5 stroke-current ${textColorInDarkMode}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
};

export default SearchIcon;
