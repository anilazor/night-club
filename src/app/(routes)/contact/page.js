import ContactForm from "@/app/components/contact/ContactForm";
import Header from "@/app/components/header/Header";
import HeroSection from "@/app/components/herosection/HeroSection";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="grid col-(--full-col) grid-cols-subgrid">
        <HeroSection text="contact us" />
        <ContactForm />
      </main>
    </>
  );
}
