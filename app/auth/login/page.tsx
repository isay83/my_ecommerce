import type { Metadata } from "next";
import "./style.css";

export const generateMetadata = (): Metadata => {
  return {
    title: "Login - E-Commerce",
    description: "This login is for people that want a super experience",
  };
};

export default function LoginPage() {
  return (
    <main className="login">
      <section></section>
      <section>
        <form action="">
          <div>
            <label htmlFor="user">User</label>
            <input type="text" id="user" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div>
            <input type="submit" value="Login" />
          </div>
        </form>
      </section>
    </main>
  );
}
