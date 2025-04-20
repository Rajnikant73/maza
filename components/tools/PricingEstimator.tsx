"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { estimateProjectPrice } from "@/lib/openai";

export default function PricingEstimator() {
  const [serviceType, setServiceType] = useState("");
  const [scope, setScope] = useState("");
  const [urgency, setUrgency] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{
    estimatedPrice: number;
    timeframe: string;
    note: string;
  } | null>(null);

  const handleEstimate = async () => {
    if (!serviceType || !scope || !urgency) return;
    
    setIsLoading(true);
    try {
      const estimate = await estimateProjectPrice({ serviceType, scope, urgency });
      setResult(estimate);
    } catch (error) {
      console.error("Error estimating project price:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NP', {
      style: 'currency',
      currency: 'NPR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6"
    >
      <h3 className="text-xl font-semibold mb-4">Project Pricing Estimator</h3>
      <p className="text-slate-600 dark:text-slate-400 mb-6">
        Get a quick estimate for your project based on your requirements.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Service Type</label>
          <Select value={serviceType} onValueChange={setServiceType}>
            <SelectTrigger>
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="web-development">Web Development</SelectItem>
              <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
              <SelectItem value="video-advertising">Video Advertising</SelectItem>
              <SelectItem value="google-business">Google My Business</SelectItem>
              <SelectItem value="domain-hosting">Domain & Hosting</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Project Scope</label>
          <Select value={scope} onValueChange={setScope}>
            <SelectTrigger>
              <SelectValue placeholder="Select project scope" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small (Basic)</SelectItem>
              <SelectItem value="medium">Medium (Standard)</SelectItem>
              <SelectItem value="large">Large (Enterprise)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Project Urgency</label>
          <Select value={urgency} onValueChange={setUrgency}>
            <SelectTrigger>
              <SelectValue placeholder="Select urgency level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low (Standard Timeline)</SelectItem>
              <SelectItem value="medium">Medium (Slightly Accelerated)</SelectItem>
              <SelectItem value="high">High (Rush Project)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={handleEstimate}
          disabled={isLoading || !serviceType || !scope || !urgency}
          className="w-full bg-sky-500 hover:bg-sky-600 text-white"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Calculating...
            </>
          ) : (
            "Calculate Estimate"
          )}
        </Button>
      </div>

      {result && (
        <div className="mt-8 border-t border-slate-200 dark:border-slate-700 pt-6">
          <Card className="bg-sky-50 dark:bg-sky-900/20 p-6">
            <h4 className="font-semibold text-lg mb-4">Estimated Project Details</h4>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-sky-200 dark:border-sky-800">
                <span>Estimated Price:</span>
                <span className="font-bold text-xl">{formatCurrency(result.estimatedPrice)}</span>
              </div>
              
              <div className="flex justify-between items-center pb-2 border-b border-sky-200 dark:border-sky-800">
                <span>Estimated Timeframe:</span>
                <span className="font-medium">{result.timeframe}</span>
              </div>
              
              <div>
                <span className="block mb-1 font-medium">Note:</span>
                <p className="text-sm text-slate-600 dark:text-slate-400">{result.note}</p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-3 rounded-lg text-sm mt-4">
                <p className="text-slate-600 dark:text-slate-400">
                  For a detailed and accurate quote, please <a href="/contact" className="text-sky-500 hover:underline">contact us</a> to discuss your specific requirements.
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}
    </motion.div>
  );
}