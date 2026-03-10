import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { urlFor } from "../lib/sanity";

export default function ServiceGallery({ images = [] }) {
  if (!images.length) return null;

  return (
    <section className="section">
      <SectionHeading
        eyebrow="Gallery"
        title="Service images"
        subtitle="Images managed by the client through the content dashboard."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {images.map((item, index) => {
          const imageUrl = urlFor(item).width(1200).height(900).fit("crop").url();

          return (
            <div
              key={index}
              className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative h-72 w-full">
                <Image
                  src={imageUrl}
                  alt={item?.alt || "Service image"}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}