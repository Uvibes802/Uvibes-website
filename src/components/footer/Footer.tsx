import Link from "next/link";
import iconInsta from "../../../public/images/iconInsta.svg";
import iconLinkedIn from "../../../public/images/iconLinkedin.svg";
import Image from "next/image";
import "../../styles/footer/footer.css";
import Button from "../button/Button";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h4>Uvibes</h4>
        <p>Contact us</p>
        <p>contact@uvibes.fr</p>
        <div className="footer-icons">
          <Link href="https://www.linkedin.com/company/uvibes">
            <Image src={iconLinkedIn} alt="LinkedIn" width={40} height={40} />
          </Link>
          <Link href="https://www.instagram.com/uvibes">
            <Image src={iconInsta} alt="Instagram" width={50} height={50} />
          </Link>
        </div>
        <p>Copyright © 2025. All rights reserved.</p>
      </div>

      <Button title="Connectez-vous à Uvibes" type="button" />
    </footer>
  );
}
