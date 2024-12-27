import { getPhotoEntry } from "@/sanity/queries/entries";
import { PortableText } from "@portabletext/react";
import type { Metadata } from "next";
// import { generateRandomFallbackImage } from "@/utils/testing-helpers";
import styles from "./page.module.css";
import { OCResponsiveImage } from "@/app/overcooked-design-system/components";

type Params = {
  params: Promise<{
    entry: string;
  }>;
};

export const imgDim = (scale = 1, height = 1140, width = 760) => {
  return {
    height: height * scale,
    width: width * scale,
  };
};

// Dynamic metadata for SEO
export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const entry: any = await getPhotoEntry(params.entry);
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
  const photoEntry: any = await getPhotoEntry(params.entry);

  const { title, mainImage } = photoEntry;
  
  return (
    <main>
      <article>
        <a href={"/"}>
          <h2>{title}</h2>
        </a>
        <OCResponsiveImage src={mainImage?.image} priority alt={title} />
      </article>
      <aside></aside>
    </main>
  );
}
