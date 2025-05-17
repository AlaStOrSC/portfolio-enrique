import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <section className="py-12 bg-background-light dark:bg-background-dark transition-colors">
      <div className="container mx-auto px-4">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;