import { getStrapiURL } from "@/utils/get-strapi-url";
import Strapi from "strapi-sdk-js";
import { GlobalResponseProps, HomeResponseProps, WorksSlugProps } from "../../types/types";

const BASE_URL = getStrapiURL();

const strapi = new Strapi({ url: BASE_URL })



export async function getGlobal() {
  const global = await strapi.find("global", {
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
  }) as unknown as GlobalResponseProps;
  return global
}

export async function getHome() {
  const home = await strapi.find("home", {

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
      }
    },
  }) as unknown as HomeResponseProps
  return home
}

export async function getWorks(quantity: number) {
  const works = await strapi.find("works", {
    pagination: {
      start: 0,
      limit: quantity
    },
    populate: {
      featuredImage: {
        fields: ["url", "alternativeText", "width", "height"]
      },
      category: {
        fields: ["title", "description"]
      },
      content: {
        on: {
          "blocks.text-content": true,
          "blocks.gallery": {
            populate: {
              images: {
                fields: ["url", "alternativeText"]
              }
            }
          }
        }
      }
    }
  })
  return works
}

export async function getWorksBySlug(slug: string) {
  const work = await strapi.find("works", {
    fields: ["title"],
    filters: {
      slug: { $eq: slug },
    },
  })
  return work
}

export async function getAllWorksSlugs() {
  const works = await strapi.find("works", {
    fields: ["slug"],
  }) as unknown as WorksSlugProps
  return works
}
