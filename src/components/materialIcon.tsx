import React from "react";

type IconPropType = {
    iconName: string;
    className?: string
}

export default function MaterialIcon({iconName, className}: IconPropType) {
  return <span className={`material-symbols-rounded ${className?className:''}`}>{iconName}</span>;
}
