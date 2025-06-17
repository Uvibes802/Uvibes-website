import Image from "next/image";
import Link from "next/link";
import logoUvibes from "../../../public/images/Logo UVIBES.png";
import "../../styles/uvibes/uvibes.css";
import Button from "../button/Button";
export default function Uvibes() {
  return (
    <section className="uvibes-section">
      <Image
        src={logoUvibes}
        alt="Logo Uvibes"
        width={300}
        height={150}
        style={{ width: "30%", height: "auto" }}
      />
      <Link href={"/uvibes"}>
        <Button title="Une solution éthique" type="button" />
      </Link>
    </section>
  );
}
