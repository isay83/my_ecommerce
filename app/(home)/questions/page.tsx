"use client";

import type { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Questions - E-Commerce",
    description: "Ask about our fantastic e-commerce platform.",
  };
};

export default function page() {
  return <div>This is my questions page</div>;
}
