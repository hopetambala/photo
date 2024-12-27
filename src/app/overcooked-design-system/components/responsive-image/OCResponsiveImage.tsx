import Image from "next/image";
import styles from "./OCResponsiveImage.module.css";

interface OCResponsiveImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  objectFit?: "cover" | "contain";
  height?: number;
}
const OCResponsiveImage = ({
  src,
  alt,
  // priority = false,
  objectFit = "cover",
  height,
  ...props
}: OCResponsiveImageProps) => {
  const imageContainerClxNames = [styles["responsive__image__container"]].join(
    " ",
  );

  const imageClassNames = [
    styles["responsive__image"],
    styles[`responsive__image--object-fit--${objectFit}`],
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
    </div>
  );
};

export default OCResponsiveImage;
