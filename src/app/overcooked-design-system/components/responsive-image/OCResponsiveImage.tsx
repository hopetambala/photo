import Image from "next/image";
import styles from "./OCResponsiveImage.module.css";

interface OCResponsiveImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  objectFit?: "cover" | "contain";
  height?: number;
  text?: string;
}
const OCResponsiveImage = ({
  src,
  alt,
  // priority = false,
  objectFit = "cover",
  height,
  text,
  ...props
}: OCResponsiveImageProps) => {
  const imageContainerClxNames = [
    styles["responsive__image__container"],
    styles["responsive__image__container__text"],
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
      className={imageContainerClxNames}
      style={{
        height: height ? height : "",
      }}
    >
      <Image className={imageClassNames} src={src} alt={alt} fill />
      {text && <div className={imageTextClassNames}>{text}</div>}
    </div>
  );
};

export default OCResponsiveImage;
