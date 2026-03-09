import ServicePage from '../../components/ServicePage';
import { serviceMap } from '../../data/services';

const service = serviceMap['real-estate'];

export const metadata = {
  title: 'Real Estate',
  description: service.summary,
};

export default function Page() {
  return <ServicePage service={service} ctaTitle="Need support in real estate?" />;
}
