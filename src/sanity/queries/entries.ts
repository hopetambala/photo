import { groq } from "next-sanity";
import {client} from "../lib/client";

/**
 * Retrieves all recipe previews from the Sanity database.
 * @returns {Promise<Array<RecipePreview>>} A promise that resolves to an array of recipe previews.
 */
export async function getAllPhotoEntriesPreviews() {
  const query = groq`*[_type == "post"] | order(publishedAt desc) {
      _id,
      slug,
      title,
      mainImage {alt, "image": asset->url}
    }`;
  const params = {};
  const next = {
    revalidate: 100, // for simple, time-based revalidation
  };
  return client.fetch(query, params, {
    next,
  });
}

/**
 * Retrieves the details of a single recipe based on the provided slug.
 *
 * @param slug - The slug of the recipe.
 * @returns A promise that resolves to the details of the recipe.
 */
export async function getPhotoEntry(slug: string) {
  const query = groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      slug,
      title,
      mainImage {alt, "image": asset->url},
    }`;
  const params = { slug };
  const next = {
    revalidate: 100, // for simple, time-based revalidation
  };
  return client.fetch(query, params, {
    next,
  });
}

/**
https://github.com/sanity-io/next-sanity/tree/main?tab=readme-ov-file#fetching-in-app-router-components
 */
