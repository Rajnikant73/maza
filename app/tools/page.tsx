import { Metadata } from 'next';
import SEOGenerator from '@/components/tools/SEOGenerator';
import AdHeadlineCreator from '@/components/tools/AdHeadlineCreator';
import PricingEstimator from '@/components/tools/PricingEstimator';

export const metadata: Metadata = {
  title: 'Digital Tools - Mews Media',
  description: 'Free digital marketing tools: SEO tag generator, ad headline creator, and project pricing estimator.',
};

export default function ToolsPage() {
  return (
    <div className="pt-16">
      <div className="bg-slate-50 dark:bg-slate-800 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Free Digital Tools</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Try our free tools designed to help you with your digital marketing and website optimization efforts.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-6">SEO Tag Generator</h2>
            <SEOGenerator />
          </div>
          
          <div className="lg:col-span-3 mt-12">
            <h2 className="text-2xl font-bold mb-6">Ad Headline Creator</h2>
            <AdHeadlineCreator />
          </div>
          
          <div className="lg:col-span-3 mt-12">
            <h2 className="text-2xl font-bold mb-6">Project Pricing Estimator</h2>
            <PricingEstimator />
          </div>
        </div>
      </div>
    </div>
  );
}