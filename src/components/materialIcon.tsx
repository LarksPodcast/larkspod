import React from "react";

type IconPropType = {
  iconName: string;
  className?: string;
  onClick?: (arg: any) => any;
};

export default function MaterialIcon({
  iconName,
  className,
  onClick,
}: IconPropType) {
  return (
    <div className="inline-block">
      <span
        className={`material-symbols-rounded block ${className ? className : ""}`}
        onClick={onClick ? onClick : undefined}
      >
        {iconName}
      </span>
    </div>
  );
}
