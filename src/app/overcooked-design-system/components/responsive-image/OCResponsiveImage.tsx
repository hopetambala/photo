import Image from "next/image";
import styles from "./OCResponsiveImage.module.css";
import React, { HTMLAttributes } from "react";

interface OCResponsiveImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  objectFit?: "cover" | "contain";
  height?: number | string;
  text?: string;
  popoverTarget?: HTMLAttributes<HTMLDivElement>["popoverTarget"];
  customImageContainerClassNames?: string;
  onClick?: () => void;
}
const OCResponsiveImage = ({
  src,
  alt,
  // priority = false,
  objectFit = "cover",
  height,
  text,
  popoverTarget,
  customImageContainerClassNames,
  ...props
}: OCResponsiveImageProps) => {
  const imageContainerClxNames = [
    styles["responsive__image__container"],
    styles["responsive__image__container__text"],
    customImageContainerClassNames,
  ].join(" ");

  const imageClassNames = [
    styles["responsive__image"],
    styles[`responsive__image--object-fit--${objectFit}`],
  ].join(" ");

  const imageTextClassNames = [
    styles["responsive__image__container__text--centered"],
  ].join(" ");
  return (
    <div
      {...props}
      popoverTarget={popoverTarget}
      className={imageContainerClxNames}
      style={{
        height: height ? height : "100vh",
      }}
    >
      <Image className={imageClassNames} src={src} alt={alt} fill />
      {text && <div className={imageTextClassNames}>{text}</div>}
    </div>
  );
};

export default OCResponsiveImage;
