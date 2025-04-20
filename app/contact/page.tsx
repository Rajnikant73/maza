import { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { COMPANY_EMAIL, COMPANY_PHONE, COMPANY_ADDRESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us - Mews Media',
  description: 'Get in touch with Mews Media for all your digital marketing and web development needs in Lumbini, Nepal.',
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-slate-600">
              Have questions or ready to start your project? Get in touch with our team.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            <p className="text-lg text-slate-600 mb-8">
              We'd love to hear from you. Fill out the form, and we'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600 mr-4 flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-slate-600">{COMPANY_EMAIL}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600 mr-4 flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-slate-600">{COMPANY_PHONE}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600 mr-4 flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-slate-600">{COMPANY_ADDRESS}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600 mr-4 flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Business Hours</h3>
                  <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-slate-600">Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="font-semibold mb-4">Find Us On Map</h3>
              <div className="rounded-xl overflow-hidden h-[300px] shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.339923915817!2d83.32825498478483!3d27.520896672571524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39969566948669cd%3A0x6adbf478c8144095!2sMews%20Media%20Pvt.%20Ltd.!5e0!3m2!1sen!2sus!4v1745157166642!5m2!1sen!2sus" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}