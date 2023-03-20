import React from "react";

type RequiredPropsTypes = {
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
