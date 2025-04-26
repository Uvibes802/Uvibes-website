import "../../styles/contact/contact.css";
import FormContact from "../form/formContact";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <main className="contact-container">
      <section className="contact-section">
        <h2>Contactez-nous</h2>
        <p>
          Vous avez des questions ou souhaitez en savoir plus sur Uvibes ? Notre
          équipe est à votre disposition pour vous répondre.
        </p>
        <div>
          <Mail size={32} />
          contact@uvibes.com
        </div>
      </section>
      <FormContact />
    </main>
  );
}
