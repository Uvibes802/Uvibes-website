import Button from "../button/Button";
import Input from "../input/Input";

import type { FormData } from "@/types/form/form";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import "../../styles/form/formContact.css";

export default function FormContact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [isValid, setIsValid] = useState(false);
  const onSubmitHandler: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch("api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        reset();
        setTimeout(() => {
          setIsValid(true);
        }, 1000);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email:", error);
    }
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
      {isValid && <p>Message envoyé avec succès</p>}
      <label className="checkbox-label">
        Je m&apos;inscris à la newsletter uVibes
        <input type="checkbox" {...register("newsletter")} />
      </label>
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
