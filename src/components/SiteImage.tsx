import Image, { type ImageProps } from "next/image";
import { asset } from "@/lib/asset";

/**
 * next/image with `unoptimized` does not prefix `basePath` on GitHub Pages,
 * so `/images/foo.jpg` would request the domain root and 404.
 */
export default function SiteImage({ src, ...rest }: ImageProps) {
  const resolved =
    typeof src === "string" && src.startsWith("/") && !src.startsWith("//")
      ? asset(src)
      : src;
  return <Image src={resolved} {...rest} />;
}
