import type { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "About Us - E-Commerce",
    description: "Learn more about our fantastic e-commerce platform.",
  };
};

export default function AboutPage() {
  return <div>This is my about page</div>;
}
