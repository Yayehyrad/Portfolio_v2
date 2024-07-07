import Abouts from "@/components/abouts/Abouts";
import Banner from "@/components/banner/Banner";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import FooterBottom from "@/components/footer/FooterBottom";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/resume/Experience";
import Resume from "@/components/resume/Resume";

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto">
      <Banner />
      <Abouts />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
      <FooterBottom />
    </main>
  );
}
