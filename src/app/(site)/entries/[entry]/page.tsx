// import { getAllRecipePreviews, getSingleRecipeDetails } from "@/sanity/sanity.query";
import { PortableText } from "@portabletext/react";
// import type { RecipeType } from "@/types/sanity.custom-types";
import type { Metadata } from "next";
// import { generateRandomFallbackImage } from "@/utils/testing-helpers";
// import { AdBanner, AdSlot } from "@/overcooked-design-system/ad-components";
import styles from "./page.module.css";
// import OcImageComponent from "@/overcooked-design-system/ui-components/image/OcImageComponent";
// import { OCButton } from "@/overcooked-design-system/ui-components";
// import { imgDim } from "@/utils/general";
// import { FavoriteCard } from "@/overcooked-design-system/cooking-components";

type Params = {
  params: {
    recipe: string;
  };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  // const recipe: RecipeType = await getSingleRecipeDetails(params.recipe);
  // const {
  //   textTitleForRecipeName: title,
  //   textForRecipeTagline: description,
  //   imageForLandingRecipe: image,
  // } = recipe;

  // return {
  //   title: `${title} | Recipe`,
  //   description,
  //   openGraph: {
  //     images: image?.image || generateRandomFallbackImage(),
  //     title,
  //     description,
  //   },
  // };
  return {
    title: `Photo Entry title`,
    description:"Photo Entry",
    // openGraph: {
    //   images: image?.image || generateRandomFallbackImage(),
    //   title,
    //   description,
    // },
  };
}

export default async function PhotoEntry({ params }: Params) {
  // const slug = params.recipe;
  // const recipes: RecipeType[] = await getAllRecipePreviews();
  // const recipe: RecipeType = await getSingleRecipeDetails(slug);
  // const {
  //   textTitleForRecipeName,
  //   textForRecipeTagline,
  //   textForIntroduction,
  //   imageForLandingRecipe,
  //   imageForIngredients,
  //   textForIngredients,
  //   imageOfProcess,
  //   textForProcess,
  //   imageForFinishedProduct,
  //   textFinishedProduct,
  //   ingredients,
  //   instructions,
  // } = recipe;

  // const clxName = [
  //   styles["recipe-page__content"],
  //   "class-comp-section-content-spacing-desktop",
  // ].join(" ");

  return (
    <div>
      <main>
       <h1>Photo Entry</h1>
      </main>
      <aside>
     
          <h3>Meet the me</h3>
         
      </aside>
    </div>
  );
}
