import ServicePage from "../../components/ServicePage";
import ServiceGallery from "../../components/ServiceGallery";
import { serviceMap } from "../../data/services";
import { sanityClient } from "../../lib/sanity";

const service = serviceMap["travel"];

const galleryQuery = `
  *[_type == "serviceGallery" && service == $service][0]{
    images[]{
      ...,
      asset->
    }
  }
`;

export const metadata = {
  title: "Travel & Tours",
  description: service.summary,
};

export default async function Page() {
  const gallery = await sanityClient.fetch(galleryQuery, { service: "travel" });

  return (
    <>
      <ServicePage
        service={service}
        ctaTitle="Need support in travel and tours?"
      />
      <ServiceGallery images={gallery?.images || []} />
    </>
  );
}