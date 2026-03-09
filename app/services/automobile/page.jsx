import ServicePage from '../../components/ServicePage';
import { serviceMap } from '../../data/services';

const service = serviceMap['automobile'];

export const metadata = {
  title: 'Automobile',
  description: service.summary,
};

export default function Page() {
  return <ServicePage service={service} ctaTitle="Need support in automobile services?" />;
}
