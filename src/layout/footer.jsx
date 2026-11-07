import React from 'react'
import { Link } from "react-router-dom";
import { Sun, Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const quickLinks = [
    { label: "Home", to: "/" },
    { label: "Explore Stays", to: "/explore" },
    { label: "About Us", to: "/about" },
    { label: "Contact", to: "/contact" },
];

const socials = [
    { label: "Facebook", href: "https://www.facebook.com/", Icon: FaFacebookF },
    { label: "Instagram", href: "https://www.instagram.com/", Icon: FaInstagram },
    { label: "X", href: "https://x.com/", Icon: FaXTwitter },
    { label: "YouTube", href: "https://www.youtube.com/", Icon: FaYoutube }
];

export default function Footer() {
    return (
        <footer className='bg-slate-800 text-slate-300'>
            <div className='mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8'>
                <div>
                    <Link to="/" className='flex items-center gap-2'>
                        <span className='flex h-9 w-9 items-center justify-center rounded-full bg-teal-700 text-amber-400'>
                            <Sun size={20} />
                        </span>
                        <span className='font-[Playfair_Display] text-xl font-bold text-white'>Lanka
                            <span className='text-teal-700'>Stayz</span>
                        </span>
                    </Link>

                    <p className='mt-4 text-sm leading-relaxed text-slate-400'>
                        Handpicked villas, holiday homes and boutique hotels across the beautiful island of Sri Lanka.
                    </p>
                </div>

                <div>
                    <h3 className='mb-4 text-sm font-semibold uppercase tracking-wider text-white'>
                        Quick Links
                    </h3>
                    <ul className='space-y-2 text-sm'>
                        {quickLinks.map((link) => (
                            <li key={link.to}>
                                <Link to={link.to}
                                    className='transition-colors hover:text-amber-400'>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className='mb-4 text-sm font-semibold uppercase tracking-wider text-white'>
                        Contact
                    </h3>
                    <ul className='space-y-3 text-sm'>
                        <li className='flex items-start gap-3'>
                            <MapPin size={18} className='mt-0.5 shrink-0 text-amber-400' />
                            <span>123 Nawala Road, Sri Lanka</span>
                        </li>
                        <li className='flex items-center gap-3'>
                            <Phone size={18} className='shrink-0 text-amber-400' />
                            <span>+94 11 123 4567</span>
                        </li>
                        <li className='flex items-center gap-3'>
                            <Mail size={18} className='shrink-0 text-amber-400' />
                            <a href="mailto:hello@lankastayz.com" className='hover:text-amber-400'>
                                hello@lankastayz.com
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className='mb-4 text-sm font-semibold uppercase tracking-wider text-white'>
                        Follow Us
                    </h3>

                    <div className='flex gap-3'>
                        {socials.map(({ label, href, Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-white transition hover:bg-amber-500"
                            >
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className='border-t border-slate-700'>
                <p className='mx-auto max-w-7xl px-4 py-5 text-center text-xs text-slate-400 sm:px-6 lg:px-8'>
                    © {new Date().getFullYear()} Lanka Stayz. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
