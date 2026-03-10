import ServicePage from "../../components/ServicePage";
import ServiceGallery from "../../components/ServiceGallery";
import { serviceMap } from "../../data/services";
import { sanityClient } from "../../lib/sanity";

const service = serviceMap["real-estate"];

const galleryQuery = `
  *[_type == "serviceGallery" && service == $service][0]{
    images[]{
      ...,
      asset->
    }
  }
`;

export const metadata = {
  title: "Real Estate",
  description: service.summary,
};

export default async function Page() {
  const gallery = await sanityClient.fetch(galleryQuery, { service: "real-estate" });

  return (
    <>
      <ServicePage
        service={service}
        ctaTitle="Looking for real estate opportunities?"
      />
      <ServiceGallery images={gallery?.images || []} />
    </>
  );
}