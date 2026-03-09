import ServicePage from '../../components/ServicePage';
import { serviceMap } from '../../data/services';

const service = serviceMap['agriculture'];

export const metadata = {
  title: 'Agriculture',
  description: service.summary,
};

export default function Page() {
  return <ServicePage service={service} ctaTitle="Need support in agriculture?" />;
}
