import { createImageUrlBuilder, createCurrentUserHook, createClient } from "next-sanity"

export const config = {
    dataset: process.env.sanity_dataset || "production",
    projectId: process.env.sanity_project_id,
    apiVersion: "2021-03-25",
    useCdn: process.env.NODE_ENV === "production"
}

export const sanityClient = createClient(config);
export const urlFor = (src) => createImageUrlBuilder(config).image(src);
export const useCurrentUser = createCurrentUserHook(config);