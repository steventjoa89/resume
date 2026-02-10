"use server";

export async function submitContactForm(formData: FormData) {
  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";

  // Simple validation (optional)
  if (!name || !email || !message) {
    throw new Error("All fields are required");
  }

  console.log("Contact Form Submitted:", { name, email, message });

  // TODO: Send email later on

  return { success: true };
}
