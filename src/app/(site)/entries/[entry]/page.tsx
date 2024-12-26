import { getPhotoEntry } from "@/sanity/queries/entries";
import { PortableText } from "@portabletext/react";
// import type { RecipeType } from "@/types/sanity.custom-types";
import type { Metadata } from "next";
// import { generateRandomFallbackImage } from "@/utils/testing-helpers";
// import { AdBanner, AdSlot } from "@/overcooked-design-system/ad-components";
import styles from "./page.module.css";
import Image from "next/image";
import { OCResponsiveImage } from "@/app/overcooked-design-system/components";
// import OcImageComponent from "@/overcooked-design-system/ui-components/image/OcImageComponent";
// import { OCButton } from "@/overcooked-design-system/ui-components";
// import { imgDim } from "@/utils/general";
// import { FavoriteCard } from "@/overcooked-design-system/cooking-components";

export const imgDim = (scale = 1, height = 1140, width = 760) => {
  return {
    height: height * scale,
    width: width * scale,
  };
};

type Params = {
  params: {
    entry: string;
  };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Params): Promise<Metadata> {
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

export default async function PhotoEntry({ params }: Params) {
  const photoEntry: any = await getPhotoEntry(params.entry);

  const { title, mainImage } = photoEntry;

  // const clxName = [
  //   styles["recipe-page__content"],
  //   "class-comp-section-content-spacing-desktop",
  // ].join(" ");

  return (
    <main>
      <article>
        <a href={"/"}>
          <h2>{title}</h2>
        </a>
        <OCResponsiveImage src={mainImage?.image} alt={title} />
      </article>
      <aside></aside>
    </main>
  );
}
