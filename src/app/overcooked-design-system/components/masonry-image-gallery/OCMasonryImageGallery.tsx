"use client";
import { useEffect, useState } from "react";
import OCResponsiveImage from "../responsive-image/OCResponsiveImage";
import OCMasonryGallery, {
  OCMasonryGalleryProps,
} from "../masonry/OCMasonryGallery";
import styles from "./OCMasonryImageGallery.module.css";

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

  const { images, masonryHeights } = props;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div>Loading</div>;
  }
  return (
    <OCMasonryGallery columns={{ xs: 2, sm: 2, md: 2, lg: 3, xl: 4 }}>
      {images.map((photo, idx) => {
        const { image, title } = photo;
        const key = `${title}-${idx}`;
        return (
          <button key={key} popoverTarget={key}>
            <OCResponsiveImage
              key={key}
              src={image}
              alt={title}
              height={
                masonryHeights[
                  Math.floor(Math.random() * masonryHeights.length)
                ]
              }
            />
            <div
              id={key}
              popover="auto"
              className={styles.oc__image__gallery__container}
            >
              {/* {idx > 0 && <div data-action="prev">← Prev</div>} */}
              <div>
                <OCResponsiveImage
                  key={key}
                  src={image}
                  alt={title}
                  objectFit="contain"
                />
              </div>
              {/* {idx < images.length - 1 && <div data-action="next">Next →</div>} */}
            </div>
          </button>
        );
      })}
    </OCMasonryGallery>
  );
};

export default OCMasonryImageGallery;
