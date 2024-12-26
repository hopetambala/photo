import Image from "next/image";
import styles from "./page.module.css";
import { getAllPhotoEntriesPreviews } from "@/sanity/queries/entries";

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
