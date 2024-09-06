import type { Metadata } from "next";
import "./style.css";

export const generateMetadata = (): Metadata => {
  return {
    title: "Register - E-Commerce",
    description: "This register is for people that want a super experience",
  };
};

export default function RegisterPage() {
  return (
    <main className="register">
      <section></section>
      <section>
        <form action="">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="user">User</label>
            <input type="text" id="user" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div>
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" />
          </div>
          <div>
            <input type="submit" value="Login" />
          </div>
        </form>
      </section>
    </main>
  );
}
