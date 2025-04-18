import Image from "next/image";
import logoUvibes from "../../../public/images/Logo UVIBES.png";
import Button from "../button/Button";
import Link from "next/link";
import "../../styles/uvibes/uvibes.css";
export default function Uvibes() {
  return (
    <section className="uvibes-section">
      <Image src={logoUvibes} alt="Logo Uvibes" width={300} height={150} />
      <Link href={"/uvibes"}>
        <Button title="Découvrir Uvibes" type="button" />
      </Link>
    </section>
  );
}
