import React from "react";

type RequiredPropsTypes = {
  className?: string;
  url: string;
  name: string;
  title: string;
  allow?: string;
  width?: string;
  height?: string;
  frameBorder?: string;
  sandbox?: string;
  style?: string;
  fullScreen?: boolean;
};

export default function InlineFrame({
  className,
  url,
  name,
  title,
  allow,
  width,
  height,
  frameBorder,
  sandbox,
  fullScreen,
}: RequiredPropsTypes) {
  return (
    <div id="inline-frame">
      <iframe
        className={className}
        src={url}
        name={name}
        title={title}
        allow={allow}
        width={width}
        height={height}
        frameBorder={frameBorder}
        sandbox={sandbox}
        allowFullScreen={fullScreen}
      ></iframe>
    </div>
  );
}
