"use client";

import React, { useState } from "react";
import Button from "../Button";
import { submitContactForm } from "./actions";
import toast from "react-hot-toast";

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});

  const validate = (formData: FormData) => {
    const newErrors: Errors = {};

    const name = (formData.get("name") as string | null)?.trim() ?? "";
    const email = (formData.get("email") as string | null)?.trim() ?? "";
    const message = (formData.get("message") as string | null)?.trim() ?? "";

    if (!name) newErrors.name = "Name is required";
    else if (name.length < 3)
      newErrors.name = "Name must be at least 3 characters";

    if (!email) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(email))
      newErrors.email = "Invalid email format";

    if (!message) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await submitContactForm(formData); // server-side action
      setErrors({});
      form.reset();
      toast.success("Message sent successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <input
        name="name"
        placeholder="Your name"
        className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-rose-400 transition"
      />
      {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}
      {/* Email */}
      <input
        name="email"
        placeholder="Your email"
        className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-rose-400 transition"
      />
      {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}

      {/* Message */}
      <textarea
        name="message"
        placeholder="Message"
        rows={5}
        className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-rose-400 transition resize-none"
      />
      {errors.message && (
        <p className="text-red-400 text-xs">{errors.message}</p>
      )}

      <div className="pt-5 w-full flex items-center justify-center">
        <Button label="Send Message" submit={true} />
      </div>
    </form>
  );
}

export default ContactForm;
