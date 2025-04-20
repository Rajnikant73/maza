import { Metadata } from 'next';
import ChatInterface from '@/components/ai-assistant/ChatInterface';

export const metadata: Metadata = {
  title: 'AI Assistant - Mews Media',
  description: 'Get instant answers to your questions about digital marketing, web development, and our services with our AI assistant.',
};

export default function AIAssistantPage() {
  return (
    <div className="pt-16">
      <div className="bg-slate-50 dark:bg-slate-800 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">AI Assistant</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Get instant answers to your questions about our services, digital marketing, web development, and more.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <ChatInterface />

          <div className="mt-12 p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">What can the AI assistant help with?</h2>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li>• Information about our digital services</li>
              <li>• Guidance on choosing the right service for your business</li>
              <li>• Details about our digital marketing course</li>
              <li>• Tips for improving your online presence</li>
              <li>• Answers to common questions about web development</li>
              <li>• Basic digital marketing advice and best practices</li>
            </ul>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
              Note: This AI assistant provides general information. For specific inquiries or
              custom quotes, please <a href="/contact" className="text-sky-500 hover:underline">contact our team</a> directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}