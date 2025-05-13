import Image from "next/image";
import Link from "next/link";
import iconInsta from "../../../public/images/iconInsta.svg";
import iconLinkedIn from "../../../public/images/iconLinkedin.svg";
import "../../styles/footer/footer.css";
import Button from "../button/Button";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h4>Uvibes</h4>
        <p>Contactez-nous</p>
        <p>contact@uvibes.fr</p>
      </div>
      <div className="footer-links">
        <Link href="/mention-legale">Mentions légales</Link>
        <Link href="/conditions-dutilisation">
          Conditions d&apos;utilisation
        </Link>
        <Link href="/politique-de-confidentialite">
          Politique de confidentialité
        </Link>
      </div>
      <div className="footer-buttons">
        <Button title="Connectez-vous à Uvibes" type="button" />
        <div className="footer-icons">
          <Link href="https://www.linkedin.com/company/uvibes">
            <Image src={iconLinkedIn} alt="LinkedIn" width={60} height={60} />
          </Link>
          <Link href="https://www.instagram.com/uvibes">
            <Image src={iconInsta} alt="Instagram" width={70} height={70} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
