import React from "react";

type IconPropType = {
    iconName: string;
    className: string
}

export default function materialIcon({iconName, className}: IconPropType) {
  return <span className={`material-symbols-rounded ${className}`}>{iconName}</span>;
}
