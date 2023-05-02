import React from "react";
import Image from "next/image";

type IconPropType = {
  iconName?: string | undefined;
  iconObject?: any | undefined;
  className?: string;
  onClick?: (arg: any) => any;
};

export default function MaterialIcon({
  iconName,
  iconObject,
  className,
  onClick,
}: IconPropType) {

  if (iconObject) {
    return (
      <div className="inline-block">
        <span
          className={`material-symbols-rounded block ${
            className ? className : ""
          }`}
          onClick={onClick ? onClick : undefined}
        >
          <Image src={iconObject} alt="gg" />
        </span>
      </div>
    ); 
  }

  return (
    <div className="inline-block">
      <span
        className={`material-symbols-rounded block ${
          className ? className : ""
        }`}
        onClick={onClick ? onClick : undefined}
      >
        {iconName}
      </span>
    </div>
  );
}
