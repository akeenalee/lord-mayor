"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { urlFor } from "../lib/sanity";

export default function ServiceGallery({ images = [] }) {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    function handleKeyDown(event) {
      if (activeIndex === null) return;

      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % images.length);
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, images.length]);

  if (!images.length) return null;

  const activeImage =
    activeIndex !== null ? images[activeIndex] : null;

  return (
    <>
      <section className="section">
        <SectionHeading
          eyebrow="Gallery"
          title="Service images"
          subtitle="Images managed by the client through the content dashboard."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {images.map((item, index) => {
            const imageUrl = urlFor(item)
              .width(1200)
              .height(900)
              .fit("crop")
              .url();

            return (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md text-left"
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={item?.alt || "Service image"}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex items-center justify-between px-5 py-4">
                  <p className="text-sm font-medium text-slate-700">
                    {item?.alt || `Service image ${index + 1}`}
                  </p>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-600">
                    View
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {activeImage ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4">
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Close
          </button>

          <button
            type="button"
            onClick={() =>
              setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-slate-900/60 px-4 py-3 text-white transition hover:bg-white/10"
            aria-label="Previous image"
          >
            ←
          </button>

          <div className="w-full max-w-6xl">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.5rem] bg-slate-900 shadow-2xl">
              <Image
                src={urlFor(activeImage).width(1800).height(1200).fit("crop").url()}
                alt={activeImage?.alt || "Service image"}
                fill
                className="object-contain"
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-sm text-slate-200">
              <p>{activeImage?.alt || `Service image ${activeIndex + 1}`}</p>
              <p>
                {activeIndex + 1} / {images.length}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() =>
              setActiveIndex((prev) => (prev + 1) % images.length)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-slate-900/60 px-4 py-3 text-white transition hover:bg-white/10"
            aria-label="Next image"
          >
            →
          </button>
        </div>
      ) : null}
    </>
  );
}