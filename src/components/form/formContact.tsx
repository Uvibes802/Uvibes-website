import Button from "../button/Button";
import Input from "../input/Input";

import "../../styles/form/formContact.css";
export default function FormContact() {
  return (
    <form className="form-contact">
      <fieldset>
        <Input label="Nom" type="text" placeholder="Nom" htmlFor="lastname" />
        <Input
          label="Prénom"
          type="text"
          placeholder="Prénom"
          htmlFor="firstname"
        />
      </fieldset>
      <Input label="Email" type="email" placeholder="Email" htmlFor="email" />
      <Input
        label="Message"
        type="text"
        placeholder="Message"
        htmlFor="message"
      />
      <div>
        <Button title="Envoyer" type="submit" />
      </div>
    </form>
  );
}
