import React from "react";

// EbayIcon component styled to match react-icons library's approach
export default function EbayIcon({
  color = "#e53238",
  size = "1em",
  className = "",
  ...props
}) {
  return (
    <svg
      stroke="currentColor"
      fill={color}
      strokeWidth="0"
      viewBox="0 0 24 24"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
      {...props}
    >
      <text
        x="6"
        y="18"
        fontFamily="Arial, sans-serif"
        fontSize="28"
        fontWeight="bold"
        fill={color}
      >
        e
      </text>
    </svg>
  );
}
