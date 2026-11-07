import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, CheckCircle2, MapPin } from "lucide-react";
import { formatPrice } from "../data/properties";

const today = () => new Date().toISOString().split("T")[0];

export default function BookingModal({ property, initial, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: initial.checkIn || "",
    checkOut: initial.checkOut || "",
    guests: initial.guests || 2,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Please enter your full name.";

    if (!form.email.trim()) err.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      err.email = "Please enter a valid email address.";

    const digits = form.phone.replace(/[\s()+-]/g, "");
    if (!form.phone.trim()) err.phone = "Contact number is required.";
    else if (!/^\d{7,15}$/.test(digits))
      err.phone = "Please enter a valid phone number.";

    if (!form.checkIn) err.checkIn = "Select a check-in date.";
    else if (form.checkIn < today())
      err.checkIn = "Check-in cannot be in the past.";

    if (!form.checkOut) err.checkOut = "Select a check-out date.";
    else if (form.checkIn && form.checkOut <= form.checkIn)
      err.checkOut = "Check-out must be after check-in.";

    const g = Number(form.guests);
    if (!g || g < 1) err.guests = "At least 1 guest is required.";
    else if (g > property.maxGuests)
      err.guests = `This stay allows up to ${property.maxGuests} guests.`;

    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length === 0) {
      console.log("Booking request:", { property: property.name, ...form });
      setSubmitted(true);
    }
  };

  const inputClass = (field) =>
    `w-full rounded-xl border bg-white px-3 py-2.5 text-sm text-slate-800 outline-none focus:ring-2 ${
      errors[field]
        ? "border-red-500 focus:ring-red-500/20"
        : "border-slate-200 focus:border-teal-700 focus:ring-teal-700/20"
    }`;

  const Field = ({ label, name, children }) => (
    <div>
      <label
        htmlFor={name}
        className="mb-1 block text-sm font-medium text-slate-700"
      >
        {label} <span className="text-red-500">*</span>
      </label>
      {children}
      {errors[name] && (
        <p role="alert" className="mt-1 text-xs text-red-600">
          {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-slate-900/60 p-0 sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[95vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl bg-[#FAF6EE] shadow-2xl sm:rounded-3xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 text-slate-600 shadow hover:bg-slate-100"
        >
          <X size={20} />
        </button>

        {submitted ? (
         
          <div className="px-6 py-14 text-center sm:px-12">
            <CheckCircle2 size={64} className="mx-auto text-green-600" />
            <h2
              id="booking-title"
              className="mt-5 font-[Playfair_Display] text-3xl font-bold text-slate-800"
            >
              Booking request sent!
            </h2>
            <p className="mx-auto mt-3 max-w-md text-slate-600">
              Thank you, {form.name.split(" ")[0]}. The host of{" "}
              <strong>{property.name}</strong> will contact you at{" "}
              <strong>{form.email}</strong> shortly to confirm your stay.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/explore"
                className="rounded-full bg-amber-500 px-6 py-3 font-semibold text-white hover:bg-amber-600"
              >
                Back to Explore
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-white"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-[1fr_260px]">
           
            <form onSubmit={handleSubmit} noValidate className="p-6 sm:p-8">
              <h2
                id="booking-title"
                className="font-[Playfair_Display] text-2xl font-bold text-slate-800"
              >
                Request Booking
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Fields marked <span className="text-red-500">*</span> are
                required.
              </p>

              <div className="mt-6 space-y-4">
                <Field label="Full Name" name="name">
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

                <Field label="Email Address" name="email">
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

                <Field label="Contact Number" name="phone">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+94 77 123 4567"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass("phone")}
                  />
                </Field>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Check-in" name="checkIn">
                    <input
                      id="checkIn"
                      name="checkIn"
                      type="date"
                      min={today()}
                      value={form.checkIn}
                      onChange={handleChange}
                      className={inputClass("checkIn")}
                    />
                  </Field>
                  <Field label="Check-out" name="checkOut">
                    <input
                      id="checkOut"
                      name="checkOut"
                      type="date"
                      min={form.checkIn || today()}
                      value={form.checkOut}
                      onChange={handleChange}
                      className={inputClass("checkOut")}
                    />
                  </Field>
                </div>

                <Field label="Number of Guests" name="guests">
                  <input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    max={property.maxGuests}
                    value={form.guests}
                    onChange={handleChange}
                    className={inputClass("guests")}
                  />
                </Field>
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-amber-500 px-6 py-3 font-semibold text-white shadow transition hover:bg-amber-600"
              >
                Submit Booking Request
              </button>
            </form>

            
            <aside className="hidden border-l border-slate-200 bg-white p-6 md:block">
              <img
                src={property.image}
                alt={property.name}
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
              <h3 className="mt-4 font-[Playfair_Display] text-lg font-semibold text-slate-800">
                {property.name}
              </h3>
              <p className="mt-1 flex items-center gap-1 text-sm text-slate-500">
                <MapPin size={14} className="text-teal-700" />
                {property.location}
              </p>
              <p className="mt-4 text-lg font-bold text-slate-800">
                {formatPrice(property.price)}
                <span className="text-sm font-normal text-slate-500">
                  {" "}
                  / night
                </span>
              </p>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}