"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { ArrowRight, Globe, Megaphone, Map, Video, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const iconMap = {
  Globe: Globe,
  Megaphone: Megaphone,
  Map: Map,
  Video: Video,
  Server: Server,
};

interface ServiceDetailProps {
  service: {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    icon: string;
  };
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const IconComponent = iconMap[service.icon as keyof typeof iconMap];

  return (
    <motion.div
      id={service.id}
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="py-16 border-b border-slate-200 dark:border-slate-700 last:border-b-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 mb-6">
            {IconComponent && <IconComponent className="h-8 w-8" />}
          </div>
          <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            {service.longDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-sky-500 hover:bg-sky-600 text-white">
              <Link href="/contact" className="flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" className="border-sky-500 text-sky-500 hover:bg-sky-50 dark:hover:bg-sky-950">
              Learn More
            </Button>
          </div>
        </div>
        <div>
          {service.id === 'web-development' && (
            <img 
              src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Web Development"
              className="rounded-xl shadow-lg object-cover w-full h-auto"
            />
          )}
          {service.id === 'digital-marketing' && (
            <img 
              src="https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Digital Marketing"
              className="rounded-xl shadow-lg object-cover w-full h-auto"
            />
          )}
          {service.id === 'google-business' && (
            <img 
              src="https://images.pexels.com/photos/38271/ipad-map-tablet-internet-38271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Google My Business"
              className="rounded-xl shadow-lg object-cover w-full h-auto"
            />
          )}
          {service.id === 'video-advertising' && (
            <img 
              src="https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Video Advertising"
              className="rounded-xl shadow-lg object-cover w-full h-auto"
            />
          )}
          {service.id === 'domain-hosting' && (
            <img 
              src="https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Domain & Hosting"
              className="rounded-xl shadow-lg object-cover w-full h-auto"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}