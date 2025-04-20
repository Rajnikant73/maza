import Link from "next/link";
import { Mail, Phone, MapPin, Globe, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { NAV_LINKS, COMPANY_NAME, COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="h-6 w-6 text-sky-500" />
              <h3 className="font-bold text-xl">{COMPANY_NAME}</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Empowering businesses with innovative digital solutions in Lumbini, Nepal and beyond.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-slate-600 dark:text-slate-400">
                <MapPin className="h-4 w-4 mr-2 text-sky-500" />
                <span>{COMPANY_ADDRESS}</span>
              </div>
              <div className="flex items-center text-slate-600 dark:text-slate-400">
                <Phone className="h-4 w-4 mr-2 text-sky-500" />
                <span>{COMPANY_PHONE}</span>
              </div>
              <div className="flex items-center text-slate-600 dark:text-slate-400">
                <Mail className="h-4 w-4 mr-2 text-sky-500" />
                <span>{COMPANY_EMAIL}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#web-development" className="text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services#digital-marketing" className="text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services#google-business" className="text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
                  Google My Business
                </Link>
              </li>
              <li>
                <Link href="/services#video-advertising" className="text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
                  Video Advertising
                </Link>
              </li>
              <li>
                <Link href="/services#domain-hosting" className="text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
                  Domain & Hosting
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/course" className="text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
                  Digital Marketing Course
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Subscribe to our newsletter for the latest digital marketing tips.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-slate-600 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-600 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-600 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-600 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-slate-600 dark:text-slate-400 text-sm hover:text-sky-500 dark:hover:text-sky-400">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-slate-600 dark:text-slate-400 text-sm hover:text-sky-500 dark:hover:text-sky-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}