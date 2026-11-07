import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  MapPin,
  Users,
  Clock,
  Calendar,
  Wifi,
  Waves,
  Wind,
  Car,
  Utensils,
  Coffee,
  Check,
} from "lucide-react";
import { properties, formatPrice } from "../data/properties";
import PropertyCard from "../components/propertyCard";
import BookingModal from "../components/bookingModal";
const amenityIcons = {
  "Wi-Fi": Wifi,
  "Swimming Pool": Waves,
  "Air Conditioning": Wind,
  "Free Parking": Car,
  Kitchen: Utensils,
  "Breakfast included": Coffee,
};

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === Number(id));

  const [activeImage, setActiveImage] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [booking, setBooking] = useState({
    checkIn: "",
    checkOut: "",
    guests: 2,
  });

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImage(0);
    setModalOpen(false);
  }, [id]);

  if (!property) {
    return (
      <section className="mx-auto max-w-xl px-4 py-32 text-center">
        <h1 className="font-[Playfair_Display] text-3xl font-bold text-slate-800">
          Stay not found
        </h1>
        <p className="mt-3 text-slate-500">
          We couldn't find the property you're looking for.
        </p>
        <Link
          to="/explore"
          className="mt-6 inline-block rounded-full bg-teal-700 px-6 py-3 font-semibold text-white hover:bg-teal-800"
        >
          Browse all stays
        </Link>
      </section>
    );
  }

  const {
    name,
    location,
    type,
    price,
    maxGuests,
    images,
    description,
    amenities,
  } = property;

  const nights =
    booking.checkIn && booking.checkOut && booking.checkOut > booking.checkIn
      ? Math.round(
          (new Date(booking.checkOut) - new Date(booking.checkIn)) / 86400000
        )
      : 0;

  const handleBookingChange = (e) => {
    const { name: field, value } = e.target;
    setBooking((prev) => ({ ...prev, [field]: value }));
  };

  const similar = [
    ...properties.filter((p) => p.id !== property.id && p.location === location),
    ...properties.filter((p) => p.id !== property.id && p.location !== location),
  ].slice(0, 3);

  const fieldClass =
    "w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20";

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pb-28 pt-6 sm:px-6 lg:px-8 lg:pb-16">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link to="/" className="hover:text-teal-700">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/explore" className="hover:text-teal-700">
            Explore Stays
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-800">{name}</span>
        </nav>

        <div className="mt-5 grid gap-3 lg:grid-cols-[3fr_1fr]">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={images[activeImage]}
              alt={`${name} photo ${activeImage + 1}`}
              className="aspect-[16/10] w-full object-cover"
            />
          </div>

          {images.length > 1 && (
            <div className="grid grid-cols-3 gap-3 lg:grid-cols-1 lg:grid-rows-3">
              {images.slice(0, 3).map((img, i) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  aria-label={`View photo ${i + 1}`}
                  className={`overflow-hidden rounded-xl border-2 transition ${
                    activeImage === i
                      ? "border-teal-700"
                      : "border-transparent opacity-80 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="aspect-[4/3] h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px]">
          <div>
            <span className="rounded-full bg-teal-700/10 px-3 py-1 text-xs font-semibold text-teal-700">
              {type}
            </span>
            <h1 className="mt-3 font-[Playfair_Display] text-3xl font-bold text-slate-800 sm:text-4xl">
              {name}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-600">
              <span className="flex items-center gap-1.5">
                <MapPin size={18} className="text-teal-700" />
                {location}, Sri Lanka
              </span>
              <span className="flex items-center gap-1.5">
                <Users size={18} className="text-teal-700" />
                Up to {maxGuests} guests
              </span>
            </div>

            <hr className="my-8 border-slate-200" />

            <h2 className="font-[Playfair_Display] text-2xl font-semibold text-slate-800">
              About this stay
            </h2>
            <p className="mt-3 leading-relaxed text-slate-600">{description}</p>

            <hr className="my-8 border-slate-200" />

            <h2 className="font-[Playfair_Display] text-2xl font-semibold text-slate-800">
              Amenities
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {amenities.map((a) => {
                const Icon = amenityIcons[a] || Check;
                return (
                  <li
                    key={a}
                    className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm"
                  >
                    <Icon size={20} className="text-teal-700" />
                    <span className="text-sm font-medium text-slate-700">
                      {a}
                    </span>
                  </li>
                );
              })}
            </ul>

            <hr className="my-8 border-slate-200" />

            <h2 className="font-[Playfair_Display] text-2xl font-semibold text-slate-800">
              Check-in &amp; Check-out
            </h2>
            <div className="mt-4 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">
                <Clock size={20} className="text-teal-700" />
                <span className="text-sm text-slate-700">
                  Check-in: <strong>2:00 PM</strong>
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">
                <Clock size={20} className="text-teal-700" />
                <span className="text-sm text-slate-700">
                  Check-out: <strong>11:00 AM</strong>
                </span>
              </div>
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl bg-white p-6 shadow-xl">
              <p className="text-slate-800">
                <span className="text-2xl font-bold">{formatPrice(price)}</span>
                <span className="text-slate-500"> / night</span>
              </p>

              <div className="mt-5 space-y-3">
                <div>
                  <label
                    htmlFor="card-checkIn"
                    className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500"
                  >
                    Check-in
                  </label>
                  <input
                    id="card-checkIn"
                    name="checkIn"
                    type="date"
                    min={today}
                    value={booking.checkIn}
                    onChange={handleBookingChange}
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="card-checkOut"
                    className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500"
                  >
                    Check-out
                  </label>
                  <input
                    id="card-checkOut"
                    name="checkOut"
                    type="date"
                    min={booking.checkIn || today}
                    value={booking.checkOut}
                    onChange={handleBookingChange}
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="card-guests"
                    className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500"
                  >
                    Guests
                  </label>
                  <select
                    id="card-guests"
                    name="guests"
                    value={booking.guests}
                    onChange={handleBookingChange}
                    className={fieldClass}
                  >
                    {Array.from({ length: maxGuests }, (_, i) => i + 1).map(
                      (n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "guest" : "guests"}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>

              {nights > 0 && (
                <div className="mt-4 flex justify-between border-t border-slate-200 pt-4 text-sm text-slate-700">
                  <span>
                    {formatPrice(price)} × {nights}{" "}
                    {nights === 1 ? "night" : "nights"}
                  </span>
                  <strong>{formatPrice(price * nights)}</strong>
                </div>
              )}

              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="mt-5 w-full rounded-full bg-amber-500 px-6 py-3 text-base font-semibold text-white shadow transition hover:bg-amber-600"
              >
                Request Booking
              </button>
              <p className="mt-3 text-center text-xs text-slate-500">
                You won't be charged yet.
              </p>
            </div>
          </aside>
        </div>

        <section className="mt-20">
          <h2 className="font-[Playfair_Display] text-2xl font-bold text-slate-800 sm:text-3xl">
            Similar stays
          </h2>
          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {similar.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </section>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-4 border-t border-slate-200 bg-white px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] lg:hidden">
        <p className="text-slate-800">
          <span className="text-lg font-bold">{formatPrice(price)}</span>
          <span className="text-sm text-slate-500"> / night</span>
        </p>
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-600"
        >
          Request Booking
        </button>
      </div>

      {modalOpen && (
        <BookingModal
          property={property}
          initial={booking}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}