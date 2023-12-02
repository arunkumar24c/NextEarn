import React from "react";
import Faq from "./homecomponents/Faq";
import Testimonials from "./homecomponents/Testimonials";
import Contact from "./homecomponents/Contact";
import HowIts from "./homecomponents/HowIts";
import Hero from "./homecomponents/Hero";
import Plan from "./homecomponents/Plan";
import Task from "./homecomponents/Task";
import Download from "./homecomponents/Download";
import Product from "./homecomponents/Product";
import Register from "./homecomponents/Register";

export const metadata = {
  title: "Earn App",
  description: " Description",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Plan />
      <Task />
      <Product/>
      <HowIts />
      <Download />
      <Register/>
      <Contact />
      <Faq />
      <Testimonials />
    </main>
  );
}
