import Image from "next/image";
import styles from "./OCResponsiveImage.module.css";

interface OCResponsiveImage {
  src: string;
  alt: string;
  priority?: boolean;
}
const OCResponsiveImage = ({ src,alt, priority = false, ...props }: OCResponsiveImage) => {
  return (
    <div {...props} className={styles["responsive__image__container"]}>
      <Image className={styles["responsive__image"]} src={src} alt={alt} fill priority />
    </div>
  );
};

export default OCResponsiveImage;
