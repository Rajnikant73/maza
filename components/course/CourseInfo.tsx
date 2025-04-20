"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { CheckCircle } from "lucide-react";
import { COURSE_DETAILS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export default function CourseInfo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <h2 className="text-3xl font-bold mb-4">{COURSE_DETAILS.title}</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          Master the art of digital marketing with our comprehensive training program. 
          Learn practical skills that you can immediately apply to grow your business 
          or advance your career in the digital marketing industry.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
            <span className="text-slate-500 dark:text-slate-400 text-sm">Duration</span>
            <p className="font-semibold">{COURSE_DETAILS.duration}</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
            <span className="text-slate-500 dark:text-slate-400 text-sm">Schedule</span>
            <p className="font-semibold">{COURSE_DETAILS.schedule}</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
            <span className="text-slate-500 dark:text-slate-400 text-sm">Mode</span>
            <p className="font-semibold">{COURSE_DETAILS.mode}</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
            <span className="text-slate-500 dark:text-slate-400 text-sm">Price</span>
            <p className="font-semibold">{COURSE_DETAILS.price}</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
        <ul className="space-y-3 mb-8">
          {COURSE_DETAILS.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-6 w-6 text-sky-500 mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="space-y-4">
          <Button size="lg" className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600">
            Register Now
          </Button>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Limited seats available. Next batch starts on June 1, 2025.
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="rounded-xl overflow-hidden shadow-lg"
      >
        <img
          src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Digital Marketing Training"
          className="w-full h-auto"
        />
        <div className="bg-white dark:bg-slate-900 p-6">
          <h3 className="text-xl font-semibold mb-2">Why Choose Our Course?</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Our digital marketing course is designed by industry experts with years of practical experience. 
            You'll learn through hands-on exercises and real-world case studies.
          </p>
          <div className="flex justify-between border-t border-slate-200 dark:border-slate-700 pt-4 text-center">
            <div>
              <div className="text-2xl font-bold text-sky-500">20+</div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Practical Exercises</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-sky-500">10+</div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Case Studies</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-sky-500">100%</div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Hands-on Learning</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}