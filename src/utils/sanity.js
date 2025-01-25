import { sanityClient } from "sanity:client";
import groq from "groq";

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

export async function getResources() {
  return await sanityClient.fetch(
    groq`*[_type == "resource"] | order(orderRank)`,
  );
}

export async function getBoard() {
  return await sanityClient.fetch(
    groq`*[_type == "board"]`,
  );
}