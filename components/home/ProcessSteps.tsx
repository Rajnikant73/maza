"use client";

import { motion } from "framer-motion";
import { WEB_DEV_PROCESS } from "@/lib/constants";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Search, Server, Palette, Code, CheckCircle, Rocket } from "lucide-react";

const iconMap = {
  Search: Search,
  Server: Server,
  Palette: Palette,
  Code: Code,
  CheckCircle: CheckCircle,
  Rocket: Rocket,
};

export default function ProcessSteps() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Web Development <span className="text-sky-500">Process</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            We follow a structured process to deliver high-quality websites that meet your business needs and exceed your expectations.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
        >
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-sky-200 dark:bg-sky-900 -translate-y-1/2 z-0"></div>

          {WEB_DEV_PROCESS.map((step, index) => {
            const IconComponent = iconMap[step.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                variants={fadeIn("up", 0.1 * index)}
                key={step.id}
                className="relative z-10"
              >
                <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center mb-4 text-sky-600 dark:text-sky-400">
                    <span className="text-2xl font-bold">{step.id}</span>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-sky-500/10 flex items-center justify-center mb-4 text-sky-500">
                    {IconComponent && <IconComponent className="h-6 w-6" />}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}