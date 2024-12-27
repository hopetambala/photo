import { getPhotoEntry } from "@/sanity/queries/entries";
// import { PortableText } from "@portabletext/react";
import type { Metadata } from "next";
// import { generateRandomFallbackImage } from "@/utils/testing-helpers";
import { OCResponsiveImage } from "@/app/overcooked-design-system/components";

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

  const { title, slug, mainImage } = photoEntry;

  return (
    <main>
      <article>
        <a href={"/"}>
          <h2>{title ?? ''}</h2>
        </a>
        <OCResponsiveImage
          key={`${slug?.current}`}
          src={mainImage?.image}
          alt={title}
          height={800}
          objectFit="contain"
        />
      </article>
      <aside></aside>
    </main>
  );
}
