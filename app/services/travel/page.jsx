import ServicePage from '../../components/ServicePage';
import { serviceMap } from '../../data/services';

const service = serviceMap['travel'];

export const metadata = {
  title: 'Travel & Tours',
  description: service.summary,
};

export default function Page() {
  return <ServicePage service={service} ctaTitle="Need support in travel and tours?" />;
}
