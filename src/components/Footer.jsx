import React from "react";

export default function SiteFooter() {
    return (
        <footer className="bg-black text-white">
            {/* Top */}
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-12 md:grid-cols-3">
                    {/* Brand + blurb + socials */}
                    <div>
                        {/* Logo text with lime underline */}
                        <a href="/" className="inline-block">
                            <span className="relative inline-block text-3xl font-extrabold tracking-[0.2em]">
                                <span className="relative z-[1]">SAMANTHA</span>
                                <span className="absolute left-0 -bottom-1 h-2 w-24 bg-lime-400"></span>
                            </span>
                        </a>

                        <p className="mt-8 max-w-md text-gray-300">
                            Elementum facilisis leo vel fringilla est ullamcorper. Ac tortor vitae purus
                            faucibus ornare suspendisse.
                        </p>

                        <ul className="mt-8 flex items-center gap-4">
                            {/* Facebook */}
                            <li>
                                <a
                                    href="https://facebook.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Facebook"
                                    className="grid h-10 w-10 place-items-center rounded-full border border-white/80 hover:border-lime-400 transition"
                                >
                                    <svg viewBox="0 0 320 512" width="16" height="16" fill="currentColor">
                                        <path
                                            fill="#ffffff"
                                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.2V288z"
                                        />
                                    </svg>
                                </a>
                            </li>

                            {/* X / Twitter */}
                            <li>
                                <a
                                    href="https://twitter.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="X (Twitter)"
                                    className="grid h-10 w-10 place-items-center rounded-full border border-white/80 hover:border-lime-400 transition"
                                >
                                    <svg viewBox="0 0 512 512" width="18" height="18">
                                        <path
                                            fill="#ffffff"
                                            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42l255.3 333.8z"
                                        />
                                    </svg>
                                </a>
                            </li>

                            {/* Instagram */}
                            <li>
                                <a
                                    href="https://instagram.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Instagram"
                                    className="grid h-10 w-10 place-items-center rounded-full border border-white/80 hover:border-lime-400 transition"
                                >
                                    <svg viewBox="0 0 448 512" width="18" height="18">
                                        <path
                                            fill="#ffffff"
                                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm0 188.6c-40.6 0-73.7-33.1-73.7-73.7s33.1-73.7 73.7-73.7 73.7 33.1 73.7 73.7-33.1 73.7-73.7 73.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9-14.9 0-26.9-12-26.9-26.9s12-26.9 26.9-26.9 26.9 12 26.9 26.9zM398.8 80C362.4 80 224 80 224 80s-138.4 0-174.8 0C22.6 80 0 102.6 0 129.2v253.5C0 409.4 22.6 432 49.2 432H398.8c26.6 0 49.2-22.6 49.2-49.2V129.2C448 102.6 425.4 80 398.8 80zM224 388.4c-72.9 0-132.4-59.5-132.4-132.4S151.1 123.6 224 123.6 356.4 183.1 356.4 256 296.9 388.4 224 388.4z"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Menu */}
                    <div className="grid grid-cols-2 gap-x-12">
                        <div>
                            <div className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-400">
                                Menu
                            </div>
                            <ul className="space-y-5 text-white/90">
                                <li><a href="/" className="hover:text-lime-400">Home</a></li>
                                <li><a href="/blog" className="hover:text-lime-400">Blog</a></li>
                                <li><a href="/programs" className="hover:text-lime-400">Programs</a></li>
                            </ul>
                        </div>
                        <div>
                            <div className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-400 invisible md:visible">
                                {/* keeps column alignment with screenshot */}
                                Menu
                            </div>
                            <ul className="space-y-5 text-white/90">
                                <li><a href="/about" className="hover:text-lime-400">About</a></li>
                                <li><a href="/contact" className="hover:text-lime-400">Contact</a></li>
                                <li><a href="/schedule" className="hover:text-lime-400">Schedule</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contacts */}
                    <div>
                        <div className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-400">
                            Contacts
                        </div>

                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <span className="grid h-10 w-10 place-items-center rounded-sm bg-lime-400 shrink-0">
                                    {/* map-marker */}
                                    <svg viewBox="0 0 384 512" width="18" height="18">
                                        <path
                                            fill="#111"
                                            d="M172.3 501.7C27 291 0 269.4 0 192 0 86 86 0 192 0s192 86 192 192c0 77.4-27 99-171.7 309.7-9.5 13.8-29.9 13.8-39.4 0zM192 272c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80z"
                                        />
                                    </svg>
                                </span>
                                <span className="text-white/90">
                                    Themeforest, Envato HQ 24 Fifth st.,<br /> Los Angeles, USA
                                </span>
                            </li>

                            <li className="flex items-center gap-4">
                                <span className="grid h-10 w-10 place-items-center rounded-sm bg-lime-400 shrink-0">
                                    {/* phone */}
                                    <svg viewBox="0 0 512 512" width="18" height="18">
                                        <path
                                            fill="#111"
                                            d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                                        />
                                    </svg>
                                </span>
                                <a href="tel:+14952311782" className="text-white/90 hover:text-lime-400">
                                    +1 (495) 23117 82
                                </a>
                            </li>

                            <li className="flex items-center gap-4">
                                <span className="grid h-10 w-10 place-items-center rounded-sm bg-lime-400 shrink-0">
                                    {/* envelope */}
                                    <svg viewBox="0 0 512 512" width="18" height="18">
                                        <path
                                            fill="#111"
                                            d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.8c-22.42 18.26-58.17 46.65-134.59 106.49-16.84 13.25-50.2 45.07-73.41 44.7-23.21.38-56.58-31.46-73.42-44.7C106.18 199.47 70.43 171.07 48 152.81V112h416zM48 400V214.4c22.91 18.25 55.41 43.86 104.94 82.65 21.86 17.2 60.13 55.19 103.06 54.95 42.72.23 80.51-37.2 103.06-54.95 49.53-38.79 82.03-64.4 104.94-82.65V400H48z"
                                        />
                                    </svg>
                                </span>
                                <a
                                    href="mailto:hana_evans@gmail.com"
                                    className="text-white/90 hover:text-lime-400"
                                >
                                    hana_evans@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <hr className="mt-16 border-t border-white/10" />

                {/* Bottom bar */}
                <div className="mt-6 flex flex-col items-center justify-between gap-4 text-gray-400 md:flex-row">
                    <p>© 2023 Samantha. All rights reserved</p>
                    <ul className="flex flex-wrap items-center gap-8">
                        <li>
                            <a href="/privacy-policy/" className="hover:text-lime-400">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="/privacy-policy/#terms" className="hover:text-lime-400">
                                Term of Service
                            </a>
                        </li>
                        <li>
                            <a href="/privacy-policy/#legal-info" className="hover:text-lime-400">
                                Legal Info
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
