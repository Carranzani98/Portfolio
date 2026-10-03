import Section from "./Section";
import SocialIcon from "./SocialIcon";
import ContactForm from "./ContactForm";
import type { PersonalInfo, SocialLink } from "@/types/portfolio";

export default function Contact({
  personal,
  socials,
}: {
  personal: PersonalInfo;
  socials: SocialLink[];
}) {
  return (
    <Section id="contact" title="Get in touch">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            {personal.contactIntro} Based in {personal.location}.
          </p>
          <ul className="space-y-3">
            {socials.map((s) => (
              <li key={s.platform}>
                <a
                  href={s.url}
                  {...(s.platform !== "email" && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="inline-flex items-center gap-3 hover:text-brand-700 dark:hover:text-brand-400"
                >
                  <SocialIcon platform={s.platform} className="h-5 w-5" />
                  {s.platform === "email" ? personal.email : s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}
