import type { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Register - E-Commerce",
    description: "This register is for people that want a super experience",
  };
};

export default function page() {
  return <div>Register</div>;
}
