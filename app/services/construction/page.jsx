import ServicePage from "../../components/ServicePage";
import ServiceGallery from "../../components/ServiceGallery";
import { serviceMap } from "../../data/services";
import { sanityClient } from "../../lib/sanity";

const service = serviceMap["construction"];

const galleryQuery = `
  *[_type == "serviceGallery" && service == $service][0]{
    images[]{
      ...,
      asset->
    }
  }
`;

export const metadata = {
  title: "Construction",
  description: service.summary,
};

export default async function Page() {
  const gallery = await sanityClient.fetch(galleryQuery, { service: "construction" });

  return (
    <>
      <ServicePage
        service={service}
        ctaTitle="Need support in construction projects?"
      />
      <ServiceGallery images={gallery?.images || []} />
    </>
  );
}