# Lanka Stayz – Accommodation Booking Website (Prototype)

A responsive accommodation booking website prototype for **Lanka Stayz**, built as a practical technical assessment for the Full-Stack Web Developer position at Xero Lanka. Visitors can explore holiday stays across Sri Lanka, filter them by destination, view property details and send a booking request.

 **Live Demo:** https://lanka-stayz-nine.vercel.app
 **Source Code:**  https://github.com/Charithma123/LankaStayz

> No login is required to use the site.

---

## Features

### Task 1 – Homepage
- Text-based Lanka Stayz branding and a navigation menu: Home, Explore Stays, About Us, Contact
- Full-width hero banner with the heading "Discover Your Perfect Stay in Sri Lanka"
- Search section with Destination, Check-in, Check-out and Number of Guests (validates that check-out is after check-in, then opens the Explore page with the filters applied)
- Featured stays section showing six sample properties
- Popular Destinations section, "Why Lanka Stayz" section
- Footer with contact information and social media links

### Task 2 – Accommodation Listings (`/explore`)
- Seven sample properties across Colombo, Kandy, Ella, Galle, Mirissa and Nuwara Eliya
- Each card shows photo, name, location, price per night in LKR, maximum guests, property type and a **View Details** button
- **Filter by destination** using destination chips; the selected filter is kept in the URL (e.g. `/explore?destination=Galle`), so filtered results can be shared or bookmarked
- Also filters by number of guests when coming from the homepage search
- "Clear filters" option and a friendly "No stays found" empty state

### Task 3 – Property Details (`/stays/:id`)
- Property name, location, type, description, maximum guests and price per night
- Photo gallery with clickable thumbnails (the *Ocean Breeze Villa* has three photos)
- Amenities with icons (Wi-Fi, swimming pool, air conditioning, parking, etc.)
- Check-in and check-out times, plus date and guest pickers with a live price estimate (price × nights)
- **Request Booking** button that opens the booking form
- Similar stays suggestions
- Handles invalid property IDs with a "Stay not found" page

### Task 4 – Booking Request Form
- Opens as a modal from the details page and pre-fills any dates/guests already chosen
- Fields: guest name, email, contact number, check-in, check-out, number of guests
- Validation with inline error messages:
  - All fields are required
  - Valid email format and phone number (7–15 digits)
  - Check-in cannot be in the past; check-out must be after check-in
  - Guests cannot exceed the property's maximum capacity
- Shows a confirmation message after a successful submission
- Closes with the Escape key or by clicking outside the form

### Task 5 – Mobile Responsiveness
- Built mobile-first with Tailwind CSS breakpoints and tested on desktop, tablet and mobile widths
- Responsive navigation, property card grid (1 → 2 → 3 columns), search form, gallery and forms
- On mobile, the property details page has a sticky bottom bar with price and the Request Booking button; the booking modal slides up as a bottom sheet

### Extra pages
- **About Us** and **Contact** pages (the contact form has validation and a success message)

---

## Technologies Used

| Area | Technology |
| --- | --- |
| UI library | React 19 |
| Build tool | Vite |
| Routing | React Router (`react-router-dom`) |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React, React Icons |
| Fonts | Inter and Playfair Display (Google Fonts) |
| Linting | ESLint |
| Hosting | Vercel |

---

## Getting Started

**Prerequisites:** Node.js 18 or later and npm.

```bash
# 1. Clone the repository
git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
cd YOUR-REPO

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open the local URL shown in the terminal (usually http://localhost:5173).

Other commands:

```bash
npm run build     # create a production build in /dist
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

---

## Project Structure

```
src/
├── components/
│   ├── bookingModal.jsx     # Booking request form with validation
│   └── propertyCard.jsx     # Reusable property card
├── data/
│   └── properties.js        # Sample property data, destinations, price formatter
├── layout/
│   ├── header.jsx           # Navigation bar
│   └── footer.jsx           # Footer with contact info and social links
├── pages/
│   ├── home.jsx             # Homepage
│   ├── explore.jsx          # Listings page with destination filter
│   ├── productDetails.jsx   # Property details page
│   ├── about.jsx            # About Us
│   └── contact.jsx          # Contact page
├── App.jsx                  # Routes
└── main.jsx                 # Entry point
public/images/               # Property and destination photos
vercel.json                  # SPA rewrite so direct links/refresh work on Vercel
```

---

## Incomplete Features and Known Limitations

This is a prototype, so the following are intentionally not implemented:

- **No backend or database.** Properties are stored in a local data file (`src/data/properties.js`). Booking and contact form submissions are validated and confirmed on screen only; they are logged to the browser console and are **not** sent or stored anywhere.
- **No availability checking.** Selected dates are not checked against existing reservations, and the dates entered on the homepage are not used to filter properties (only destination and guest count are).
- **No payment processing, user accounts or reservation management.**
- **Only one property has a multi-photo gallery** (Ocean Breeze Villa, 3 photos); the other properties have a single photo each.
- Property information is fictional and photographs are used for demonstration purposes only.
- No automated tests have been written yet.

---

## AI-Assisted Development Disclosure

AI-assisted tools (Claude by Anthropic) were used during this project for deployment guidance, writing this README and the development summary, and preparing the sample data in `src/data/properties.js` (new properties and images). I have reviewed the code and can explain and modify it during the technical interview.

---

## Development Summary

### My approach
1. **Planned the structure first:** five pages (Home, Explore, Property Details, About, Contact) plus a reusable booking modal, with one shared property data file so every page reads from the same source.
2. **Built with React and Vite** for fast development, React Router for navigation, and Tailwind CSS for a consistent, responsive design with a warm, premium look (teal and amber accents, Playfair Display headings).
3. **Used URL query parameters for search and filters**, so the homepage search, destination cards and filter chips all feed the same Explore page logic, and filtered views can be shared.
4. **Focused on user experience and accessibility:** labelled form fields, inline validation messages (`role="alert"`), keyboard support (Escape closes the modal), `aria-pressed` on filter chips, image alt text, and clear empty/not-found states.
5. **Designed mobile-first**, then enhanced for tablet and desktop.

### Improvements for the full commercial website
- **Backend and database** (Node/Express with MongoDB or PostgreSQL) for properties, hosts, bookings and enquiries, with a REST or GraphQL API
- **Real availability calendar** that blocks booked dates and filters search results by date range
- **Online payments** (PayLink, PayHere or Stripe) with booking confirmation emails and SMS
- **User accounts** for guests and a host/admin dashboard to manage listings, photos, pricing and bookings
- **Richer search and filters:** price range, property type, amenities, ratings, sort options, pagination and a map view
- **Reviews and ratings**, wishlist/favourites and multi-currency/multi-language support
- **Image optimisation** (CDN, responsive images, lazy loading) and migration to Next.js for server-side rendering and better SEO
- **Quality and security:** automated tests (Vitest, React Testing Library, Playwright), CI/CD, server-side validation, rate limiting and spam protection on forms
- **Analytics and performance monitoring**