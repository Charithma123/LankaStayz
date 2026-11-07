export const destinations = [
  "Colombo",
  "Kandy",
  "Ella",
  "Galle",
  "Mirissa",
  "Nuwara Eliya",
];

export const properties = [
  {
    id: 1,
    name: "Ocean Breeze Villa",
    location: "Mirissa",
    type: "Villa",
    price: 32000,
    maxGuests: 6,
    image: "/images/mirissa-villa.jpg",
    images: [
      "/images/mirissa-villa.jpg",
      "/images/mirissa-villa-2.jpg",
      "/images/mirissa-villa-3.jpg",
    ],
    description:
      "A beachfront villa steps from the sand, with an infinity pool, open-air living areas and sunset views over the Indian Ocean.",
    amenities: ["Wi-Fi", "Swimming Pool", "Air Conditioning", "Free Parking"],
  },
  {
    id: 2,
    name: "Hilltop Tea Retreat",
    location: "Nuwara Eliya",
    type: "Holiday Home",
    price: 24500,
    maxGuests: 5,
    image: "/images/nuwara-eliya-home.jpg",
    images: ["/images/nuwara-eliya-home.jpg"],
    description:
      "A cosy colonial-style home surrounded by tea estates, with a fireplace and misty mountain views.",
    amenities: ["Wi-Fi", "Free Parking", "Kitchen", "Breakfast included"],
  },
  {
    id: 3,
    name: "Nine Arches Hideaway",
    location: "Ella",
    type: "Boutique Hotel",
    price: 18500,
    maxGuests: 2,
    image: "/images/ella-hotel.jpg",
    images: ["/images/ella-hotel.jpg"],
    description:
      "A boutique stay with panoramic valley views, minutes from the famous Nine Arches Bridge.",
    amenities: ["Wi-Fi", "Breakfast included", "Free Parking"],
  },
  {
    id: 4,
    name: "Fort View Residence",
    location: "Galle",
    type: "Apartment",
    price: 21000,
    maxGuests: 4,
    image: "/images/galle-apartment.jpg",
    images: ["/images/galle-apartment.jpg"],
    description:
      "A stylish apartment inside the historic Galle Fort walls, close to cafés, boutiques and the ramparts.",
    amenities: ["Wi-Fi", "Air Conditioning", "Kitchen"],
  },
  {
    id: 5,
    name: "Lakeside Kandy Manor",
    location: "Kandy",
    type: "Holiday Home",
    price: 27000,
    maxGuests: 8,
    image: "/images/kandy-manor.jpg",
    images: ["/images/kandy-manor.jpg"],
    description:
      "A spacious family home overlooking Kandy Lake with a garden, and a short walk to the Temple of the Tooth.",
    amenities: ["Wi-Fi", "Air Conditioning", "Free Parking", "Kitchen"],
  },
  {
    id: 6,
    name: "Colombo Skyline Suite",
    location: "Colombo",
    type: "Apartment",
    price: 19000,
    maxGuests: 3,
    image: "/images/colombo-apartment.jpg",
    images: ["/images/colombo-apartment.jpg"],
    description:
      "A modern high-rise apartment in the heart of Colombo with a rooftop pool and city views.",
    amenities: ["Wi-Fi", "Swimming Pool", "Air Conditioning", "Free Parking"],
  },
  {
    id: 7,
    name: "Palm Grove Beach House",
    location: "Mirissa",
    type: "Holiday Home",
    price: 26000,
    maxGuests: 6,
    image: "/images/mirissa-house.jpg",
    images: ["/images/mirissa-house.jpg"],
    description: "A relaxed beach house surrounded by coconut palms.",
    amenities: ["Wi-Fi", "Air Conditioning", "Kitchen"],
  },
];

export const destinationImages = {
  Colombo: "/images/dest-colombo.jpg",
  Kandy: "/images/dest-kandy.jpg",
  Ella: "/images/dest-ella.jpg",
  Galle: "/images/dest-galle.jpg",
  Mirissa: "/images/dest-mirissa.jpg",
  "Nuwara Eliya": "/images/dest-nuwara-eliya.jpg",
};

export const formatPrice = (n) => `LKR ${n.toLocaleString("en-US")}`;