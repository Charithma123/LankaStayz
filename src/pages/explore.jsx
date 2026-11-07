import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchX, Users, Calendar } from "lucide-react";
import PropertyCard from "../components/propertyCard";
import { properties, destinations } from "../data/properties";

export default function Explore() {
  const [searchParams, setSearchParams] = useSearchParams();

  const destinationParam = searchParams.get("destination") || "All";
  // Ignore unknown values in the URL
  const active = destinations.includes(destinationParam)
    ? destinationParam
    : "All";

  const guests = Number(searchParams.get("guests")) || 0;
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");

  const results = useMemo(
    () =>
      properties.filter(
        (p) =>
          (active === "All" || p.location === active) &&
          (!guests || p.maxGuests >= guests)
      ),
    [active, guests]
  );

  const selectDestination = (d) => {
    const next = new URLSearchParams(searchParams);
    if (d === "All") next.delete("destination");
    else next.set("destination", d);
    setSearchParams(next);
  };

  const clearFilters = () => setSearchParams({});

  const chips = ["All", ...destinations];

  return (
    <>
  
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/images/dest-kandy.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/70" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 className="font-[Playfair_Display] text-4xl font-bold text-white sm:text-5xl">
            Explore Stays in Sri Lanka
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-100">
            Browse villas, holiday homes, apartments and boutique hotels across
            the island.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        <div
          role="group"
          aria-label="Filter by destination"
          className="flex flex-wrap gap-2"
        >
          {chips.map((d) => {
            const selected = d === active;
            return (
              <button
                key={d}
                type="button"
                onClick={() => selectDestination(d)}
                aria-pressed={selected}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
                  selected
                    ? "border-teal-700 bg-teal-700 text-white shadow"
                    : "border-slate-300 bg-white text-slate-700 hover:border-teal-700 hover:text-teal-700"
                }`}
              >
                {d}
              </button>
            );
          })}
        </div>

      
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
          <p className="font-semibold text-slate-800" aria-live="polite">
            {results.length} {results.length === 1 ? "stay" : "stays"} found
            {active !== "All" && (
              <span className="font-normal text-slate-500"> in {active}</span>
            )}
          </p>

          {guests > 0 && (
            <span className="flex items-center gap-1.5 text-sm text-slate-500">
              <Users size={15} className="text-teal-700" />
              {guests} {guests === 1 ? "guest" : "guests"}
            </span>
          )}
          {checkIn && checkOut && (
            <span className="flex items-center gap-1.5 text-sm text-slate-500">
              <Calendar size={15} className="text-teal-700" />
              {checkIn} → {checkOut}
            </span>
          )}
          {(active !== "All" || guests > 0 || checkIn || checkOut) && (
            <button
              type="button"
              onClick={clearFilters}
              className="text-sm font-semibold text-teal-700 hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>

        
        {results.length > 0 ? (
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-12 max-w-md rounded-2xl bg-white px-6 py-14 text-center shadow-sm">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-700/10 text-teal-700">
              <SearchX size={30} />
            </span>
            <h2 className="mt-5 font-[Playfair_Display] text-2xl font-semibold text-slate-800">
              No stays found
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              We couldn't find any stays
              {active !== "All" ? ` in ${active}` : ""}
              {guests > 0 ? ` for ${guests} guests` : ""}. Try another
              destination or clear your filters.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-800"
            >
              Show all stays
            </button>
          </div>
        )}
      </section>
    </>
  );
}