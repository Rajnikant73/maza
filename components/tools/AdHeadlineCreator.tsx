"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Copy, Check } from "lucide-react";
import { generateAdHeadline } from "@/lib/openai";

export default function AdHeadlineCreator() {
  const [productInfo, setProductInfo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<string[]>([]);
  const [copied, setCopied] = useState<Record<number, boolean>>({});

  const handleGenerate = async () => {
    if (!productInfo.trim()) return;
    
    setIsLoading(true);
    try {
      const headlines = await generateAdHeadline(productInfo);
      setResults(headlines);
    } catch (error) {
      console.error("Error generating ad headlines:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopied({ ...copied, [index]: true });
    setTimeout(() => {
      setCopied({ ...copied, [index]: false });
    }, 2000);
  };

  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6"
    >
      <h3 className="text-xl font-semibold mb-4">Ad Headline Creator</h3>
      <p className="text-slate-600 dark:text-slate-400 mb-6">
        Generate compelling ad headlines for your products or services to improve click-through rates.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Product/Service Information</label>
          <Textarea
            value={productInfo}
            onChange={(e) => setProductInfo(e.target.value)}
            placeholder="Describe your product or service, its benefits, and target audience..."
            className="resize-none h-32"
          />
        </div>

        <Button
          onClick={handleGenerate}
          disabled={isLoading || !productInfo.trim()}
          className="w-full bg-sky-500 hover:bg-sky-600 text-white"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            "Generate Headlines"
          )}
        </Button>
      </div>

      {results.length > 0 && (
        <div className="mt-8 space-y-4 border-t border-slate-200 dark:border-slate-700 pt-6">
          <h4 className="font-semibold">Generated Headlines:</h4>
          
          <div className="space-y-3">
            {results.map((headline, index) => (
              <div key={index} className="relative">
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg pr-10">
                  {headline}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(headline, index)}
                  className="absolute right-1 top-1 h-8 w-8"
                >
                  {copied[index] ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            ))}
          </div>
          
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">
            These headlines are generated for demonstration purposes. For best results, test multiple headlines with your target audience.
          </p>
        </div>
      )}
    </motion.div>
  );
}