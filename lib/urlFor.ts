import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  if (!source) throw new Error("No image source");

  return builder.image(source);
}

export default urlFor;
