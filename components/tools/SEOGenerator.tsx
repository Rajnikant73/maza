"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Copy, Check } from "lucide-react";
import { generateSEOTags } from "@/lib/openai";

export default function SEOGenerator() {
  const [websiteInfo, setWebsiteInfo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ title: string; description: string; keywords: string } | null>(null);
  const [copied, setCopied] = useState({ title: false, description: false, keywords: false });

  const handleGenerate = async () => {
    if (!websiteInfo.trim()) return;
    
    setIsLoading(true);
    try {
      const seoTags = await generateSEOTags(websiteInfo);
      setResult(seoTags);
    } catch (error) {
      console.error("Error generating SEO tags:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string, field: "title" | "description" | "keywords") => {
    navigator.clipboard.writeText(text);
    setCopied({ ...copied, [field]: true });
    setTimeout(() => {
      setCopied({ ...copied, [field]: false });
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
      <h3 className="text-xl font-semibold mb-4">SEO Tag Generator</h3>
      <p className="text-slate-600 dark:text-slate-400 mb-6">
        Generate optimized SEO tags for your website to improve search engine rankings.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Website Information</label>
          <Textarea
            value={websiteInfo}
            onChange={(e) => setWebsiteInfo(e.target.value)}
            placeholder="Enter your website's purpose, target audience, and key features..."
            className="resize-none h-32"
          />
        </div>

        <Button
          onClick={handleGenerate}
          disabled={isLoading || !websiteInfo.trim()}
          className="w-full bg-sky-500 hover:bg-sky-600 text-white"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            "Generate SEO Tags"
          )}
        </Button>
      </div>

      {result && (
        <div className="mt-8 space-y-4 border-t border-slate-200 dark:border-slate-700 pt-6">
          <h4 className="font-semibold">Generated SEO Tags:</h4>
          
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium">Title Tag</label>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(result.title, "title")}
                className="h-8 px-2"
              >
                {copied.title ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            <Input value={result.title} readOnly className="bg-slate-50 dark:bg-slate-800" />
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium">Meta Description</label>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(result.description, "description")}
                className="h-8 px-2"
              >
                {copied.description ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            <Textarea 
              value={result.description} 
              readOnly 
              className="resize-none bg-slate-50 dark:bg-slate-800" 
            />
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium">Keywords</label>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(result.keywords, "keywords")}
                className="h-8 px-2"
              >
                {copied.keywords ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            <Input value={result.keywords} readOnly className="bg-slate-50 dark:bg-slate-800" />
          </div>
          
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">
            These tags are generated for demonstration purposes. For best results, tailor them to your specific content.
          </p>
        </div>
      )}
    </motion.div>
  );
}