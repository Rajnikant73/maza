"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fadeIn, slideIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left"
          >
            <span className="inline-block px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm font-medium mb-4">
              #1 Digital Agency in Lumbini
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Your Digital <br />
              <span className="text-sky-500">Presence</span> With Us
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              We help businesses in Nepal grow online with professional web development, 
              strategic digital marketing, and comprehensive digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white px-8">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-sky-500 text-sky-500 hover:bg-sky-50">
                <Link href="/services" className="flex items-center">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((id) => (
                  <div key={id} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200"></div>
                ))}
              </div>
              <p className="text-sm text-slate-600">
                <span className="font-bold text-slate-900">100+</span> Businesses already trust us
              </p>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            initial="hidden"
            animate="show"
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Digital Marketing Team"
                className="w-full h-auto"
              />
              {/* Stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg max-w-[200px]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-500">Projects Completed</span>
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">+12%</span>
                </div>
                <div className="text-2xl font-bold">250+</div>
                <div className="h-2 bg-slate-100 rounded-full mt-2">
                  <div className="h-full w-3/4 bg-sky-500 rounded-full"></div>
                </div>
              </div>
              {/* Clients card */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-[200px]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-500">Satisfied Clients</span>
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">+25%</span>
                </div>
                <div className="text-2xl font-bold">98%</div>
                <div className="h-2 bg-slate-100 rounded-full mt-2">
                  <div className="h-full w-[98%] bg-sky-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}