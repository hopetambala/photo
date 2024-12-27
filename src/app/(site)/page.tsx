import Image from "next/image";
import styles from "./page.module.css";
import { getAllPhotoEntriesPreviews } from "@/sanity/queries/entries";
import {
  OCMasonryGallery,
  OCResponsiveImage,
} from "../overcooked-design-system/components";

const masonryHeights = [
  300, 500, 500, 600, 
];

export default async function Home() {
  const photoEntries: any[] = await getAllPhotoEntriesPreviews();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ol>
          {photoEntries.map(({ title, slug }) => (
            <li key={slug?.current}>
              <a href={`/entries/${slug?.current}`}>View {title}</a>
            </li>
          ))}
        </ol>
        <div style={{ width: "800px" }}>
          <OCMasonryGallery>
            {photoEntries.map((photo, idx) => {
              const { mainImage, slug, title } = photo;
              return (
                <OCResponsiveImage
                  key={`${slug?.current}-${idx}`}
                  src={mainImage?.image}
                  alt={title}
                  height={masonryHeights[Math.floor(Math.random()*masonryHeights.length)]}
                />
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
