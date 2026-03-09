import ServicePage from '../../components/ServicePage';
import { serviceMap } from '../../data/services';

const service = serviceMap['construction'];

export const metadata = {
  title: 'Construction',
  description: service.summary,
};

export default function Page() {
  return <ServicePage service={service} ctaTitle="Need support in construction?" />;
}
