import PageTitle from "../UI/PageTitle";
import Cards from "./contact-us/Cards";
import MapSection from "./contact-us/MapSection";
import ContactForm from "./contact-us/ContactForm";

const ContactUs = () => {
  return (
    <>
      <PageTitle pageName='Kontakt' />
      <Cards />
      <ContactForm />
      <MapSection />
    </>
  );
};

export default ContactUs;
