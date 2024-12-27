import Image from "next/image";
import styles from "./OCResponsiveImage.module.css";

interface OCResponsiveImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  objectFit?: "cover" | "contain";
}
const OCResponsiveImage = ({
  src,
  alt,
  priority = false,
  objectFit = "cover",
  ...props
}: OCResponsiveImageProps) => {

  const imageContainerClxNames =[
    styles["responsive__image__container"], 
  ].join(" ");

  const imageClassNames = [
    styles["responsive__image"],
    styles[`responsive__image--object-fit--${objectFit}`],
  ].join(" ");
  return (
    <div {...props} className={imageContainerClxNames}>
      <Image className={imageClassNames} src={src} alt={alt} fill priority />
    </div>
  );
};

export default OCResponsiveImage;
