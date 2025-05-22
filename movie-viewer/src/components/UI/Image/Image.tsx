import React from "react";

type ImageProps = {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

const allowedExtensions = [
  ".svg",
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".gif",
  ".bmp",
];

const hasAllowedExtension = (filename: string) =>
  allowedExtensions.some((ext) => filename.toLowerCase().endsWith(ext));

const Image: React.FC<ImageProps> = ({
  src,
  alt = "default",
  width = 24,
  height = 24,
  ...props
}) => {
  if (!hasAllowedExtension(src)) {
    console.error("Image must be of a supported type:", src);
    return null;
  }
  return (
    <img
      onError={(e) => {
        const target = e.currentTarget;
        target.onerror = null;
        target.src = "/img/no_image_available.png";
      }}
      src={src}
      alt={alt}
      width={width}
      height={height}
      {...props}
    />
  );
};

export default Image;
