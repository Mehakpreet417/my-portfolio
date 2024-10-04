// pages/index.js
import HomeLayout from '../src/layouts/HomeLayout';
import Hero from '../src/sections/Home/Hero';
import AboutMe from '../src/sections/Home/AboutMe';
import Skills from '../src/sections/Home/Skills';
import Works from '../src/sections/Home/Works';
import Contact from '../src/sections/Home/Contact';
import Blogs from '@/sections/Home/Blogs';
import Footer from '@/sections/Home/Footer';

export default function Home() {
  return (
    <HomeLayout>
      <Hero />
      <AboutMe />
      <Skills />
      <Works />
      <Blogs />
      <Contact />
      <Footer />
    </HomeLayout>
  );
}
