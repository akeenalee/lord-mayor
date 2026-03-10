import ServicePage from "../../components/ServicePage";
import ServiceGallery from "../../components/ServiceGallery";
import { serviceMap } from "../../data/services";
import { sanityClient } from "../../lib/sanity";

const service = serviceMap["agriculture"];

const galleryQuery = `
  *[_type == "serviceGallery" && service == $service][0]{
    images[]{
      ...,
      asset->
    }
  }
`;

export const metadata = {
  title: "Agriculture",
  description: service.summary,
};

export default async function Page() {
  const gallery = await sanityClient.fetch(galleryQuery, { service: "agriculture" });

  return (
    <>
      <ServicePage
        service={service}
        ctaTitle="Interested in agriculture partnerships?"
      />
      <ServiceGallery images={gallery?.images || []} />
    </>
  );
}