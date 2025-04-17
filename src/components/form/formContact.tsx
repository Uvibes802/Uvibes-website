import Button from "../button/Button";
import Input from "../input/Input";

import "../../styles/form/formContact.css";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { FormData } from "@/types/form/form";

export default function FormContact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmitHandler: SubmitHandler<FormData> = (data) => {
    console.log("Données du formulaire:", data);
    reset();
  };

  return (
    <form className="form-contact" onSubmit={handleSubmit(onSubmitHandler)}>
      <fieldset>
        <Input
          label="Nom"
          type="text"
          placeholder="Nom"
          htmlFor="lastname"
          {...register("lastname", { required: true })}
        />
        <Input
          label="Prénom"
          type="text"
          placeholder="Prénom"
          htmlFor="firstname"
          {...register("firstname", { required: true })}
        />
      </fieldset>
      <Input
        label="Email"
        htmlFor="email"
        type="email"
        placeholder="Email"
        {...register("email", { required: true })}
      />
      <Input
        label="Message"
        type="textarea"
        {...register("message", { required: true })}
        htmlFor="message"
      />
      <div>
        <Button title="Envoyer" type="submit" />
      </div>
      {errors.lastname && <p>Nom est requis</p>}
      {errors.firstname && <p>Prénom est requis</p>}
      {errors.email && <p>Email est requis</p>}
      {errors.message && <p>Message est requis</p>}
    </form>
  );
}
