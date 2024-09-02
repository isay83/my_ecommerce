import type { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Login - E-Commerce",
    description: "This login is for people that want a super experience",
  };
};

export default function page() {
  return <div>Login</div>;
}
