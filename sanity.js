import {
    createImageUrlBuilder,
    createCurrentUserHook,
    createClient,
} from "next-sanity";

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2021-03-25",
    useCdn: process.env.NODE_ENV === "production",
}

// Setup the client for fetching data in the getProps page functions.
export const sanityClient = createClient(config);

// Setup a helper function for generating Image URLs with only the 
// asset reference data in your documents
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);