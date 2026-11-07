import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  MapPin,
  Calendar,
  Users,
  ShieldCheck,
  BadgeDollarSign,
  Headphones,
  Zap,
} from "lucide-react";
import PropertyCard from "../components/propertyCard";
import {
  properties,
  destinations,
  destinationImages,
} from "../data/properties"

const reasons = [
  {
    Icon: ShieldCheck,
    title: "Verified Stays",
    text: "Every property is checked for quality and comfort.",
  },
  {
    Icon: BadgeDollarSign,
    title: "Best Price",
    text: "Fair, transparent rates in LKR with no hidden fees.",
  },
  {
    Icon: Headphones,
    title: "Local Support",
    text: "Our Sri Lankan team is ready to help, any time.",
  },
  {
    Icon: Zap,
    title: "Easy Booking",
    text: "Send a booking request in under a minute.",
  },
];

export default function Home() {
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];

  const [search, setSearch] = useState({
    destination: "",
    checkIn: "",
    checkOut: "",
    guests: 2,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearch((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.checkIn && search.checkOut && search.checkOut <= search.checkIn) {
      setError("Check-out date must be after check-in date.");
      return;
    }

    const params = new URLSearchParams();
    if (search.destination) params.set("destination", search.destination);
    if (search.checkIn) params.set("checkIn", search.checkIn);
    if (search.checkOut) params.set("checkOut", search.checkOut);
    if (search.guests) params.set("guests", search.guests);

    navigate(`/explore?${params.toString()}`);
  };

  const fieldClass =
    "w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm text-slate-800 outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20";

  return (
    <>
      
      <section className="relative">
        <div
          className="relative flex min-h-[560px] items-center justify-center bg-cover bg-center px-4 pb-32 pt-24 text-center md:min-h-[640px]"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/70" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              Sri Lanka's stays, handpicked
            </p>
            <h1 className="font-[Playfair_Display] text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Discover Your Perfect Stay in Sri Lanka
            </h1>
            <p className="mt-5 text-base text-slate-100 sm:text-lg">
              Villas, holiday homes and boutique hotels from the beaches of the
              south to the tea hills of the highlands.
            </p>
          </div>
        </div>

      
        <div className="relative z-20 mx-auto -mt-20 max-w-6xl px-4 sm:px-6">
          <form
            onSubmit={handleSearch}
            className="rounded-2xl bg-white p-5 shadow-2xl sm:p-6"
            aria-label="Search stays"
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            
              <div>
                <label
                  htmlFor="destination"
                  className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  Destination
                </label>
                <div className="relative">
                  <MapPin
                    size={16}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-teal-700"
                  />
                  <select
                    id="destination"
                    name="destination"
                    value={search.destination}
                    onChange={handleChange}
                    className={fieldClass}
                  >
                    <option value="">All destinations</option>
                    {destinations.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="checkIn"
                  className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  Check-in
                </label>
                <div className="relative">
                  <Calendar
                    size={16}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-teal-700"
                  />
                  <input
                    id="checkIn"
                    name="checkIn"
                    type="date"
                    min={today}
                    value={search.checkIn}
                    onChange={handleChange}
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="checkOut"
                  className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  Check-out
                </label>
                <div className="relative">
                  <Calendar
                    size={16}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-teal-700"
                  />
                  <input
                    id="checkOut"
                    name="checkOut"
                    type="date"
                    min={search.checkIn || today}
                    value={search.checkOut}
                    onChange={handleChange}
                    className={fieldClass}
                  />
                </div>
              </div>

              
              <div>
                <label
                  htmlFor="guests"
                  className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  Guests
                </label>
                <div className="relative">
                  <Users
                    size={16}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-teal-700"
                  />
                  <input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    max="12"
                    value={search.guests}
                    onChange={handleChange}
                    className={fieldClass}
                  />
                </div>
              </div>

              
              <div className="flex items-end">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-3 text-sm font-semibold text-white shadow transition hover:bg-amber-600"
                >
                  <Search size={18} />
                  Search Stays
                </button>
              </div>
            </div>

            {error && (
              <p role="alert" className="mt-3 text-sm text-red-600">
                {error}
              </p>
            )}
          </form>
        </div>
      </section>

      
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
              Featured Stays
            </p>
            <h2 className="mt-2 font-[Playfair_Display] text-3xl font-bold text-slate-800 sm:text-4xl">
              Handpicked places to stay
            </h2>
          </div>
          <Link
            to="/explore"
            className="text-sm font-semibold text-teal-700 hover:underline"
          >
            View all stays →
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {properties.slice(0, 6).map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </section>

      
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
              Popular Destinations
            </p>
            <h2 className="mt-2 font-[Playfair_Display] text-3xl font-bold text-slate-800 sm:text-4xl">
              Where will you go?
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {destinations.map((d) => (
              <Link
                key={d}
                to={`/explore?destination=${encodeURIComponent(d)}`}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl"
              >
                <img
                  src={destinationImages[d]}
                  alt={d}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 font-[Playfair_Display] text-lg font-semibold text-white">
                  {d}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
            Why Book With Us
          </p>
          <h2 className="mt-2 font-[Playfair_Display] text-3xl font-bold text-slate-800 sm:text-4xl">
            Travel made simple
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl bg-white p-6 text-center shadow-sm"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-700/10 text-teal-700">
                <Icon size={26} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-800">
                {title}
              </h3>
              <p className="mt-2 text-sm text-slate-500">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}