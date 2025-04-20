import { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import ServiceHighlights from '@/components/home/ServiceHighlights';
import ProcessSteps from '@/components/home/ProcessSteps';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Mews Media - Digital Agency in Lumbini, Nepal',
  description: 'Transform your digital presence with our web development, digital marketing, and video advertising services in Lumbini, Nepal.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceHighlights />
      <ProcessSteps />
      <Testimonials />
      <CTASection />
    </>
  );
}