"use client";
import { useEffect, useRef, useState } from "react";
import OCResponsiveImage from "../responsive-image/OCResponsiveImage";
import OCMasonryGallery, {
  OCMasonryGalleryProps,
} from "../masonry/OCMasonryGallery";
import styles from "./OCMasonryImageGallery.module.css";
import OCDialog from "../dialog/OCDialog";

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
  ...props
}: OCMasonryImageGalleryProps) => {
  const [isMounted, setIsMounted] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const { images, masonryHeights } = props;

  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = (index: number) => {
    setCurrentIndex(index);
    if (dialogRef.current) {
      dialogRef.current.showModal();
      
    }
  };
  const closeDialog = () => dialogRef.current?.close();

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentImage = images[currentIndex];

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
        <button
          type="button"
          aria-label="Close"
          title="Close"
          className={styles.oc__image__gallery__dialog__closebutton}
          onClick={closeDialog}
        >
          ×
        </button>

        {currentIndex > 0 && (
          <button
            type="button"
            aria-label="Previous image"
            title="Previous"
            className={styles.oc__image__gallery__dialog__navbutton}
            onClick={goToPrevious}
            style={{ left: "12px" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        {currentImage && (
          <div style={{ width: "80vw", height: "100%", margin: "0 auto" }}>
            <OCResponsiveImage
              src={currentImage.image}
              alt={currentImage.title}
              objectFit="contain"
            />
          </div>
        )}

        {currentIndex < images.length - 1 && (
          <button
            type="button"
            aria-label="Next image"
            title="Next"
            className={styles.oc__image__gallery__dialog__navbutton}
            onClick={goToNext}
            style={{ right: "12px" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
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
                openDialog(idx);
              }}
            />
          );
        })}
      </OCMasonryGallery>
    </>
  );
};

export default OCMasonryImageGallery;
