import { Link } from "react-router-dom";
import { MapPin, Users } from "lucide-react";
import { formatPrice } from "../data/properties";

export default function PropertyCard({ property }) {
  const { id, name, location, type, price, maxGuests, image } = property;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={`${name} in ${location}`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-teal-700">
          {type}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-[Playfair_Display] text-lg font-semibold text-slate-800">
          {name}
        </h3>

        <div className="mt-2 flex items-center gap-4 text-sm text-slate-500">
          <span className="flex items-center gap-1">
            <MapPin size={14} className="text-teal-700" />
            {location}
          </span>
          <span className="flex items-center gap-1">
            <Users size={14} className="text-teal-700" />
            Up to {maxGuests} guests
          </span>
        </div>

        <div className="mt-auto flex items-end justify-between pt-5">
          <p className="text-slate-800">
            <span className="text-lg font-bold">{formatPrice(price)}</span>
            <span className="text-sm text-slate-500"> / night</span>
          </p>
          <Link
            to={`/stays/${id}`}
            className="rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-800"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}