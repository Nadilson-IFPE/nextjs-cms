import Prismic from "@prismicio/client";

export function getPrismicClient(req?: unknown) {
  const prismic = Prismic.createClient("https://nadilsondev.prismic.io/api/v2");

  return prismic;
}
