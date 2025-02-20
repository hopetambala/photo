"use client";
import { useEffect, useRef, useState } from "react";
import OCResponsiveImage from "../responsive-image/OCResponsiveImage";
import OCMasonryGallery, {
  OCMasonryGalleryProps,
} from "../masonry/OCMasonryGallery";
import styles from "./OCMasonryImageGallery.module.css";
import OCDialog from "../dialog/OCDialog";
import { set } from "sanity";

interface imageProps {
  image: string;
  title: string;
}

interface OCMasonryImageGalleryProps
  extends Omit<OCMasonryGalleryProps, "children"> {
  images: imageProps[];
  masonryHeights: number[];
}

const OCMasonryImageGallery = ({
  columns = 2,
  defaultHeight = 800,
  ...props
}: OCMasonryImageGalleryProps) => {
  const [isMounted, setIsMounted] = useState(false);

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");

  const { images, masonryHeights } = props;

  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => dialogRef.current?.showModal();
  const closeDialog = () => dialogRef.current?.close();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div>Loading</div>;
  }
  return (
    <>
      <OCDialog
        dialogRef={dialogRef}
        classnames={styles.oc__image__gallery__dialog}
      >
        <button onClick={closeDialog}>Close</button>

        {/* {idx > 0 && <div data-action="prev">← Prev</div>} */}
        {image && (
            <OCResponsiveImage src={image} alt={title} objectFit="contain" />
        )}
        {/* {idx < images.length - 1 && (
                  <div data-action="next">Next →</div>
                )} */}
      </OCDialog>
      <OCMasonryGallery columns={{ xs: 2, sm: 2, md: 2, lg: 3, xl: 4 }}>
        {images.map((photo, idx) => {
          const { image, title } = photo;
          const key = `${title}-${idx}`;
          return (
            <OCResponsiveImage
              key={key}
              src={image}
              alt={title}
              height={
                masonryHeights[
                  Math.floor(Math.random() * masonryHeights.length)
                ]
              }
              onClick={() => {
                openDialog();
                setImage(image);
                setTitle(title);
              }}
            />
          );
        })}
      </OCMasonryGallery>
    </>
  );
};

export default OCMasonryImageGallery;
