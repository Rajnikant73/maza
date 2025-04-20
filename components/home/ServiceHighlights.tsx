"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe, Megaphone, Map, Video, Server } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap = {
  Globe: Globe,
  Megaphone: Megaphone,
  Map: Map,
  Video: Video,
  Server: Server,
};

export default function ServiceHighlights() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Digital <span className="text-sky-500">Services</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            We offer comprehensive digital services to help businesses grow their online presence and reach their target audience effectively.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                variants={fadeIn("up", 0.1 * index)}
                key={service.id}
                className="group"
              >
                <Link href={`/services#${service.id}`}>
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 h-full flex flex-col border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-lg hover:border-sky-200 dark:hover:border-sky-800">
                    <div className={cn(
                      "w-14 h-14 rounded-lg mb-6 flex items-center justify-center",
                      "bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400"
                    )}>
                      {IconComponent && <IconComponent className="h-7 w-7" />}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                      {service.description}
                    </p>
                    <div className="flex items-center text-sky-500 font-medium transition-all duration-300 group-hover:translate-x-1">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}