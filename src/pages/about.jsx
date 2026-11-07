import { Link } from "react-router-dom";
import { Heart, ShieldCheck, Leaf } from "lucide-react";

const values = [
  {
    Icon: Heart,
    title: "Genuine Hospitality",
    text: "Sri Lankans are known for warmth. We work with hosts who treat every guest like family.",
  },
  {
    Icon: ShieldCheck,
    title: "Trust & Transparency",
    text: "Honest descriptions, fair prices in LKR and no surprises when you arrive.",
  },
  {
    Icon: Leaf,
    title: "Responsible Travel",
    text: "We support local owners and communities so tourism benefits the people who live here.",
  },
];

const stats = [
  { value: "500+", label: "Stays listed" },
  { value: "6", label: "Destinations" },
  { value: "10k+", label: "Happy guests" },
  { value: "4.8", label: "Average rating" },
];

const team = [
  { name: "Nimali Perera", role: "Founder & CEO" },
  { name: "Kasun Fernando", role: "Head of Partnerships" },
  { name: "Ayesha Rahman", role: "Guest Experience" },
  { name: "Dilan Silva", role: "Lead Developer" },
];

const initials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");

export default function About() {
  return (
    <>
    
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/images/dest-mirissa.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/70" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <h1 className="font-[Playfair_Display] text-4xl font-bold text-white sm:text-5xl">
            About Lanka Stayz
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-100">
            Connecting travellers with the most memorable places to stay in
            Sri Lanka.
          </p>
        </div>
      </section>

     
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
            Our Story
          </p>
          <h2 className="mt-2 font-[Playfair_Display] text-3xl font-bold text-slate-800 sm:text-4xl">
            Born from a love of the island
          </h2>
          <p className="mt-5 leading-relaxed text-slate-600">
            Lanka Stayz started with a simple idea: finding a great place to
            stay in Sri Lanka should be as beautiful as the island itself. From
            beachfront villas in Mirissa to tea-country retreats in Nuwara
            Eliya, we bring together the best accommodation under one roof.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            Our mission is to make booking easy, transparent and personal, for
            international visitors and locals alike, while supporting the
            hosts who make each stay special.
          </p>
        </div>
        <img
          src="/images/ella-hotel.jpg"
          alt="A Sri Lankan villa surrounded by palm trees"
          loading="lazy"
          className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
        />
      </section>

      
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
              What We Believe
            </p>
            <h2 className="mt-2 font-[Playfair_Display] text-3xl font-bold text-slate-800 sm:text-4xl">
              Our core values
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl bg-[#FAF6EE] p-8 text-center"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-700 text-white">
                  <Icon size={26} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-800">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="bg-teal-700 py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 text-center sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="font-[Playfair_Display] text-4xl font-bold text-amber-400">
                {value}
              </p>
              <p className="mt-1 text-sm text-teal-50">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
            The People
          </p>
          <h2 className="mt-2 font-[Playfair_Display] text-3xl font-bold text-slate-800 sm:text-4xl">
            Meet the team
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {team.map(({ name, role }) => (
            <div
              key={name}
              className="rounded-2xl bg-white p-6 text-center shadow-sm"
            >
              <span
                aria-hidden="true"
                className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-amber-500/20 font-[Playfair_Display] text-2xl font-bold text-amber-600"
              >
                {initials(name)}
              </span>
              <h3 className="mt-4 font-semibold text-slate-800">{name}</h3>
              <p className="text-sm text-slate-500">{role}</p>
            </div>
          ))}
        </div>
      </section>

    
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-800 px-6 py-14 text-center">
          <h2 className="font-[Playfair_Display] text-3xl font-bold text-white sm:text-4xl">
            Ready to find your stay?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            Browse handpicked villas, homes and boutique hotels across Sri
            Lanka.
          </p>
          <Link
            to="/explore"
            className="mt-8 inline-block rounded-full bg-amber-500 px-8 py-3 font-semibold text-white transition hover:bg-amber-600"
          >
            Explore Stays
          </Link>
        </div>
      </section>
    </>
  );
}