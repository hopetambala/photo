import { getPhotoEntry } from "@/sanity/queries/entries";
// import { PortableText } from "@portabletext/react";
import type { Metadata } from "next";
// import { generateRandomFallbackImage } from "@/utils/testing-helpers";
import {
  OCMasonryGallery,
  OCMasonryImageGallery,
  OCResponsiveImage,
} from "@/app/overcooked-design-system/components";

import styles from "./page.module.css";

const masonryHeights = [200, 400, 400, 500];

type Params = {
  params: Promise<{
    entry: string;
  }>;
};

export type PhotoEntry = {
  title: string;
  slug: {
    current: string;
  };
  mainImage: {
    image: string;
  };
  gallery: {
    images: {
      image: string;
    }[];
  };
};

// Dynamic metadata for SEO
export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const entry: PhotoEntry = await getPhotoEntry(params.entry);
  const { title, mainImage } = entry;

  return {
    title,
    description: "Photo Entry Description",
    openGraph: {
      images: mainImage?.image,
      title,
      description: "Photo Entry Open Graph Description",
    },
  };
}

export default async function PhotoEntry(props: Params) {
  const params = await props.params;
  const photoEntry: PhotoEntry = await getPhotoEntry(params.entry);
  const { title, slug, mainImage, gallery } = photoEntry;

  return (
    <main className={styles.page}>
      <article>
        <div className={styles.page__header__container}>
          <div className={styles.page__header__container__element}>
            <a href={"/"}>↖️ head back</a>
          </div>
          <div className={styles.page__header__container__element}>
            <h2>{title ?? ""}</h2>
          </div>
          <div className={styles.page__header__container__element}></div>
        </div>
        <div style={{ width: "80vw", margin: "0 auto" }}>
          <OCResponsiveImage
            key={`${slug?.current}`}
            src={mainImage?.image}
            alt={title}
            height={"80vh"}
            objectFit="cover"
          />
        </div>
        <div style={{ width: "80vw", margin: "0 auto" }}>
          {/* <OCMasonryGallery columns={{ xs: 2, sm: 2, md: 2, lg: 3, xl: 4 }}>
            {gallery?.images.map((photo, idx) => {
              const { image } = photo;
              const key = `${slug?.current}-${idx}`;
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
                  <div id={key} popover="auto">
                    <OCResponsiveImage
                      key={key}
                      src={image}
                      alt={title}
                      objectFit="contain"
                    />
                  </div>
                </button>
              );
            })}
          </OCMasonryGallery> */}
          <OCMasonryImageGallery
            columns={{ xs: 2, sm: 2, md: 2, lg: 3, xl: 4 }}
            images={gallery?.images.map((image) => ({
              image: image.image,
              title: title,
            }))}
            masonryHeights={masonryHeights}
          />
        </div>
      </article>
      <aside></aside>
    </main>
  );
}
