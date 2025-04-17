import { EmailOutlined } from "@mui/icons-material";
import "../../styles/contact/contact.css";
import FormContact from "../form/formContact";
export default function Contact() {
  return (
    <main className="contact-container">
      <section className="contact-section">
        <h3>Contactez-nous</h3>
        <p>
          Vous avez des questions ou souhaitez en savoir plus sur Uvibes ? Notre
          équipe est à votre disposition pour vous répondre.
        </p>
        <div>
          <EmailOutlined />
          contact@uvibes.com
        </div>
      </section>
      <FormContact />
    </main>
  );
}
