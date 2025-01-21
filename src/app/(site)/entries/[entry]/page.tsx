import { getPhotoEntry } from "@/sanity/queries/entries";
// import { PortableText } from "@portabletext/react";
import type { Metadata } from "next";
// import { generateRandomFallbackImage } from "@/utils/testing-helpers";
import {
  OCMasonryGallery,
  OCResponsiveImage,
} from "@/app/overcooked-design-system/components";

import styles from "./page.module.css";

const masonryHeights = [300, 500, 500, 600];

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
        <a href={"/"}>
          <h2>{title ?? ""}</h2>
        </a>
        <OCResponsiveImage
          key={`${slug?.current}`}
          src={mainImage?.image}
          alt={title}
          height={800}
          objectFit="contain"
        />

        <div style={{ width: "800px", margin: "0 auto" }}>
          <OCMasonryGallery>
            {gallery?.images.map((photo, idx) => {
              const { image } = photo;
              return (
                <OCResponsiveImage
                  key={`${slug?.current}-${idx}`}
                  src={image}
                  alt={title}
                  height={
                    masonryHeights[
                      Math.floor(Math.random() * masonryHeights.length)
                    ]
                  }
                />
              );
            })}
          </OCMasonryGallery>
        </div>
      </article>
      <aside></aside>
    </main>
  );
}
