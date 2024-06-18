import { sanityClient } from "sanity:client";
import groq from "groq";
export async function getPosts() {
  return await sanityClient.fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`,
  );
}
export async function getPost(slug) {
  return await sanityClient.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]`,
    {
      slug,
    },
  );
}

export async function getHome() {
  return await sanityClient.fetch(
    groq`*[_type == "home"]`,
  );
}

export async function getHistory() {
  return await sanityClient.fetch(
    groq`*[_type == "history"]`,
  );
}

export async function getEvents() {
  return await sanityClient.fetch(
    groq`*[_type == "events"]`,
  );
}