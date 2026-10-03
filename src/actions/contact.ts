"use server";

import type { ContactField, ContactState } from "@/types/contact";

// Deliberately loose: the only real validation of an email is delivering to it.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const GENERIC_ERROR: ContactState = {
  status: "error",
  message:
    "Something went wrong sending your message. Please try again or email me directly.",
};

export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: real users never see this field. Pretend success so bots don't adapt.
  if (String(formData.get("hp") ?? "") !== "") {
    return { status: "success", message: "Thanks, your message was sent." };
  }

  const values: Record<ContactField, string> = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  const fieldErrors: Partial<Record<ContactField, string>> = {};
  if (values.name.length < 2 || values.name.length > 100) {
    fieldErrors.name = "Enter your name (2 to 100 characters).";
  }
  if (values.email.length > 254 || !EMAIL_RE.test(values.email)) {
    fieldErrors.email = "Enter a valid email address.";
  }
  if (values.message.length < 10 || values.message.length > 5000) {
    fieldErrors.message = "Message must be 10 to 5000 characters.";
  }
  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      fieldErrors,
      values,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error(
      "Contact form: missing RESEND_API_KEY, CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL",
    );
    return { ...GENERIC_ERROR, values };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: values.email,
        subject: `Portfolio message from ${values.name.replace(/[\r\n]+/g, " ")}`,
        text: `From: ${values.name} <${values.email}>\n\n${values.message}`,
      }),
    });

    if (!res.ok) {
      console.error(
        "Contact form: Resend responded",
        res.status,
        await res.text(),
      );
      return { ...GENERIC_ERROR, values };
    }
  } catch (err) {
    console.error("Contact form: request to Resend failed", err);
    return { ...GENERIC_ERROR, values };
  }

  return { status: "success", message: "Thanks, your message was sent." };
}
