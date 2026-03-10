import ServicePage from "../../components/ServicePage";
import ServiceGallery from "../../components/ServiceGallery";
import { serviceMap } from "../../data/services";
import { sanityClient } from "../../lib/sanity";

const service = serviceMap["automobile"];

const galleryQuery = `
  *[_type == "serviceGallery" && service == $service][0]{
    images[]{
      ...,
      asset->
    }
  }
`;

export const metadata = {
  title: "Automobile",
  description: service.summary,
};

export default async function Page() {
  const gallery = await sanityClient.fetch(galleryQuery, { service: "automobile" });

  return (
    <>
      <ServicePage
        service={service}
        ctaTitle="Need automobile solutions?"
      />
      <ServiceGallery images={gallery?.images || []} />
    </>
  );
}