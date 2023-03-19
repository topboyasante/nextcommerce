import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "oqt4x2wc",
    dataset: "production",
    apiVersion: "2023-03-19",
    useCdn: false
  });