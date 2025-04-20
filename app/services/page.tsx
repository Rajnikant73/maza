import { Metadata } from 'next';
import { SERVICES } from '@/lib/constants';
import ServiceDetail from '@/components/services/ServiceDetail';

export const metadata: Metadata = {
  title: 'Our Services - Mews Media',
  description: 'Explore our range of digital services including web development, digital marketing, Google My Business optimization, video advertising, and domain & hosting.',
};

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <div className="bg-slate-50 dark:bg-slate-800 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Digital Services</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              We offer a comprehensive range of digital services to help businesses 
              establish and grow their online presence effectively.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {SERVICES.map((service) => (
          <ServiceDetail key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}