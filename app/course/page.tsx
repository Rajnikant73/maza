import { Metadata } from 'next';
import CourseInfo from '@/components/course/CourseInfo';
import RegistrationForm from '@/components/course/RegistrationForm';

export const metadata: Metadata = {
  title: 'Digital Marketing Course - Mews Media',
  description: 'Master digital marketing with our comprehensive training course covering Meta Business Suite, Google Ads, Canva, and SEO best practices.',
};

export default function CoursePage() {
  return (
    <div className="pt-16">
      <div className="bg-slate-50 dark:bg-slate-800 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Digital Marketing Training Course</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Learn practical digital marketing skills from industry experts to grow your business or advance your career.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <CourseInfo />

        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Ready to Enroll?</h2>
          <div className="max-w-2xl mx-auto">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </div>
  );
}