import qs from "qs";
import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";

const BASE_URL = getStrapiURL();

const globalQuery = qs.stringify({
  populate: {
    header: {
      populate: {
        link: true,
      },
    },
    footer: {
      populate: {
        link: true,
        socialLinks: true,
      },
    },
  },
});

const homeQuery = qs.stringify({
  populate: {
    hero: {
      populate: {
        image: true,
      },
    },
    categoriesBox: {
      populate: {
        categories: {
          fields: ["title", "description"],
        },
        image: true,
      },
    },
  },
});

export async function getGlobal() {
  const path = "/api/global";
  const url = new URL(path, BASE_URL);

  url.search = globalQuery;

  return await fetchAPI(url.href, { method: "GET" });
}

export async function getHome() {
  const path = "/api/home";
  const url = new URL(path, BASE_URL);

  url.search = homeQuery;

  return await fetchAPI(url.href, { method: "GET" });
}
