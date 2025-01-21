import Image from "next/image";
import styles from "./page.module.css";
import { getAllPhotoEntriesPreviews } from "@/sanity/queries/entries";
import {
  OCMasonryGallery,
  OCResponsiveImage,
} from "../overcooked-design-system/components";
import { PhotoEntry } from "./entries/[entry]/page";

const masonryHeights = [300, 500, 500, 600];

export default async function Home() {
  const photoEntries: PhotoEntry[] = await getAllPhotoEntriesPreviews();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div style={{ width: "800px" }}>
          <OCMasonryGallery>
            {photoEntries.map((photo, idx) => {
              const { mainImage, slug, title } = photo;
              return (
                <a href={`/entries/${slug?.current}`} key={slug?.current}>
                  <OCResponsiveImage
                    key={`${slug?.current}-${idx}`}
                    src={mainImage?.image}
                    alt={title}
                    text={title}
                    height={
                      masonryHeights[
                        Math.floor(Math.random() * masonryHeights.length)
                      ]
                    }
                  />
                </a>
              );
            })}
          </OCMasonryGallery>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://hopetambala.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          2024 Hope Tambala
        </a>
      </footer>
    </div>
  );
}
