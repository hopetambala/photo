import Image from "next/image";
import styles from "./OCResponsiveImage.module.css";

interface OCResponsiveImage {
  src: string;
  alt: string;
}
const OCResponsiveImage = ({ src,alt, ...props }: OCResponsiveImage) => {
  return (
    <div {...props} className={styles["responsive__image__container"]}>
      <Image className={styles["responsive__image"]} src={src} alt={alt} fill />
    </div>
  );
};

export default OCResponsiveImage;
