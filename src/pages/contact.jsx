import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const contactInfo = [
  {
    Icon: MapPin,
    title: "Address",
    text: "123 Nawala Road, Sri Lanka",
  },
  { Icon: Phone, title: "Phone", text: "+94 11 234 5678", href: "tel:+94112345678" },
  {
    Icon: Mail,
    title: "Email",
    text: "hello@lankastayz.com",
    href: "mailto:hello@lankastayz.com",
  },
  { Icon: Clock, title: "Working Hours", text: "Mon–Sat, 9:00 AM – 6:00 PM" },
];

const socials = [
  { label: "Facebook", href: "https://facebook.com", Icon: FaFacebookF },
  { label: "Instagram", href: "https://instagram.com", Icon: FaInstagram },
  { label: "X", href: "https://x.com", Icon: FaXTwitter },
  { label: "YouTube", href: "https://youtube.com", Icon: FaYoutube },
];

const emptyForm = { name: "", email: "", subject: "", message: "" };

function Field({ label, name, error, children }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1 block text-sm font-medium text-slate-700"
      >
        {label} <span className="text-red-500">*</span>
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Please enter your name.";
    if (!form.email.trim()) err.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      err.email = "Please enter a valid email address.";
    if (!form.subject.trim()) err.subject = "Please add a subject.";
    if (!form.message.trim()) err.message = "Please write a message.";
    else if (form.message.trim().length < 10)
      err.message = "Message should be at least 10 characters.";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length === 0) {
      console.log("Contact message:", form);
      setSent(true);
      setForm(emptyForm);
    }
  };

  const inputClass = (field) =>
    `w-full rounded-xl border bg-white px-3 py-2.5 text-sm text-slate-800 outline-none focus:ring-2 ${
      errors[field]
        ? "border-red-500 focus:ring-red-500/20"
        : "border-slate-200 focus:border-teal-700 focus:ring-teal-700/20"
    }`;

  return (
    <>
   
      <section className="bg-teal-700">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="font-[Playfair_Display] text-4xl font-bold text-white sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-teal-50">
            Questions about a stay or a booking? Our team is happy to help.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
       
        <div className="rounded-2xl bg-white p-6 shadow-md sm:p-8">
          {sent ? (
            <div className="py-10 text-center">
              <CheckCircle2 size={60} className="mx-auto text-green-600" />
              <h2 className="mt-4 font-[Playfair_Display] text-2xl font-bold text-slate-800">
                Message sent!
              </h2>
              <p className="mt-2 text-slate-600">
                Thanks for reaching out. We'll reply within one business day.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-800"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <h2 className="font-[Playfair_Display] text-2xl font-bold text-slate-800">
                Send us a message
              </h2>

              <Field label="Name" name="name" error={errors.name}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass("name")}
                />
              </Field>

              <Field label="Email" name="email" error={errors.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass("email")}
                />
              </Field>

              <Field label="Subject" name="subject" error={errors.subject}>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  className={inputClass("subject")}
                />
              </Field>

              <Field label="Message" name="message" error={errors.message}>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className={inputClass("message")}
                />
              </Field>

              <button
                type="submit"
                className="w-full rounded-full bg-amber-500 px-6 py-3 font-semibold text-white shadow transition hover:bg-amber-600"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        
        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            {contactInfo.map(({ Icon, title, text, href }) => (
              <div key={title} className="rounded-2xl bg-white p-5 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-700/10 text-teal-700">
                  <Icon size={20} />
                </span>
                <h3 className="mt-3 text-sm font-semibold text-slate-800">
                  {title}
                </h3>
                {href ? (
                  <a
                    href={href}
                    className="text-sm text-slate-600 hover:text-teal-700"
                  >
                    {text}
                  </a>
                ) : (
                  <p className="text-sm text-slate-600">{text}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl shadow-sm">
            <iframe
              title="Lanka Stayz office location, Colombo"
              src="https://www.google.com/maps?q=Nawala,+Sri+Jayawardenepura+Kotte,+Sri+Lanka&output=embed"
              loading="lazy"
              className="h-64 w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

         
          <div className="mt-6 flex items-center gap-3">
            <span className="text-sm font-semibold text-slate-700">
              Follow us:
            </span>
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-700 text-white transition hover:bg-amber-500"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}