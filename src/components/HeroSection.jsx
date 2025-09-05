// HeroFitness.jsx
import React, { useEffect, useRef, useState } from "react";

export default function HeroSection() {
    const [open, setOpen] = useState(false);

    // Close on ESC
    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <section
            className="
        relative overflow-hidden
        min-h-[720px] md:min-h-[820px] xl:min-h-[880px]
        flex items-center py-25
        bg-white
      "
        >
            {/* soft blobs */}
            <div className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full blur-3xl" />
            <div className="pointer-events-none absolute top-10 right-0 h-[380px] w-[380px] rounded-full blur-3xl" />
            {/* dotted texture */}
            <div
                className="pointer-events-none absolute right-6 bottom-6 w-56 h-56 opacity-60"
                style={{
                    backgroundImage:
                        "radial-gradient(currentColor 1px, transparent 1px)",
                    color: "#d9ead3",
                    backgroundSize: "12px 12px",
                }}
            />

            <div className="relative mx-auto w-full max-w-[1200px] px-5 md:px-8">
                {/* GRID: left copy / center image / right card */}
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-6">
                    {/* LEFT COPY */}
                    <div className="order-1 lg:col-span-5 lg:order-none">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 lg:-mt-50">
                            BUILD A PERFECT
                            <br />
                            <span className="text-neutral-900">HEALTH GROWTH</span>
                        </h1>

                        <p className="mt-5 max-w-md text-[13px] sm:text-sm text-neutral-600">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur.
                        </p>

                        <button
                            className="mt-6 inline-flex items-center rounded-md bg-[#67c2d5] px-5 py-3 hover:text-white text-sm font-bold uppercase tracking-wide text-neutral-900 shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#67c2d5]"
                            type="button"
                        >
                            Join Now
                        </button>
                    </div>

                    {/* CENTER IMAGE */}
                    <div className="lg:col-span-4 order-2 lg:order-none">
                        <div className="relative flex justify-center">
                            <img
                                src="/hero.png"
                                alt="Athlete holding bottle"
                                className="relative z-10 md:-mt-45 h-100 w-[min(90vw,640px)] sm:w-[min(80vw,400px)] max-w-none object-contain drop-shadow-2xl -ml-35"
                                draggable="false"
                            />
                            {/* Light dots behind image */}
                            <div
                                aria-hidden
                                className="absolute -right-6 top-10 hidden md:block z-0 h-48 w-48 opacity-60"
                                style={{
                                    backgroundImage: "radial-gradient(#d9ead3 1.5px, transparent 1.5px)",
                                    backgroundSize: "12px 12px",
                                }}
                            />
                        </div>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="hidden lg:flex lg:col-span-3 mt-100 bg-[#67c2d5]">
                        <div className="rounded-2xl p-4 md:p-5 ">
                            <div className="relative overflow-hidden rounded-lg w-60 -ml-1.5">
                                {/* thumbnail — replace if needed */}
                                <img
                                    src="video.jpg"
                                    alt="Workout preview"
                                    className="h-40 w-full object-cover"
                                />
                                {/* play button */}
                                <button
                                    onClick={() => setOpen(true)}
                                    aria-label="Play video"
                                    className="
                                                group absolute inset-0 grid place-items-center
                                                bg-black/0 hover:bg-black/10 focus:bg-black/10 transition
                                            "
                                >
                                    <span
                                        className="
                                                    grid h-14 w-14 place-items-center rounded-full bg-white/90 hover:bg-[#67c2d5] backdrop-blur
                                                    ring-1 ring-black/10 shadow
                                                    group-hover:scale-105 transition
                                                    "
                                    >
                                        {/* Play icon */}
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="h-7 w-7 text-neutral-900"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </span>
                                </button>
                            </div>

                            <div className="mt-4">
                                <p className="text-xl font-semibold text-neutral-900">
                                    Stay Healthy by active
                                </p>
                                <p className="mt-2 leading-5 text-neutral-700">
                                    Habitant morbi tristique senectus et netus. Morbi enim nunc
                                    faucibus a pellentesque sit amet dictum sit amet justo donec.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* QUOTE BUBBLE (top-right of hero) */}
                <div className="hidden lg:block absolute  left-200 top-20 max-w-lg italic rounded-2xl bg-[#67c2d5] p-5 text-lg text-neutral-700 shadow backdrop-blur">
                    <p className="leading-6">
                        “You’re going to have to let it hurt. Let it suck. The harder you
                        work, the better you will look your appearance isn’t parallel to how
                        healthy you lift; it’s parallel to how hard you work.”
                    </p>
                </div>

                {/* STATS STRIP */}
                <div
                    className="
            pointer-events-none
            absolute left-45 sm:left-75 bottom-5 -translate-x-1/2
            w-[82%] sm:w-[85%] md:w-[55%] max-w-3xl
            rounded-2xl bg-white/80 backdrop-blur
            shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] z-10 ml-10
          "
                >
                    <div className="pointer-events-auto grid grid-cols-3 divide-x divide-neutral-400 p-5 bg-[#67c2d5] rounded-lg">
                        <Stat number="3" labelTop="CERTIFICATE" labelBottom="TRAINER" />
                        <Stat number="8" labelTop="YEARS" labelBottom="EXPERIENCE" />
                        <Stat number="47" labelTop="LOYAL" labelBottom="CLIENT" />
                    </div>
                </div>
            </div>

            {/* VIDEO MODAL */}
            {open && (
                <Modal onClose={() => setOpen(false)}>
                    <div className="w-[92vw] max-w-4xl">
                        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
                            <iframe
                                title="Workout Video"
                                className="absolute inset-0 h-full w-full"
                                src="https://www.youtube.com/embed/Vr3h5X9kmUo?autoplay=1&rel=0&modestbranding=1"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </Modal>
            )}
        </section>
    );
}

/* —————————————————— Helpers —————————————————— */

function Stat({ number, labelTop, labelBottom }) {
    return (
        <div className="flex flex-col items-center justify-center px-4 py-5 sm:py-6">
            {/* Number on top */}
            <div className="text-4xl sm:text-6xl font-bold text-[#67c2d5] leading-none text-black">
                {number}
            </div>

            {/* Labels stacked below */}
            <div className="mt-2 text-[10px] sm:text-[14px] font-semibold tracking-wide text-neutral-600 text-center">
                <div>{labelTop}</div>
                <div>{labelBottom}</div>
            </div>
        </div>
    );
}

function Modal({ children, onClose }) {
    const backdropRef = useRef(null);

    // close on outside click
    const clickBackdrop = (e) => {
        if (e.target === backdropRef.current) onClose();
    };

    return (
        <div
            ref={backdropRef}
            onClick={clickBackdrop}
            className="
        fixed inset-0 z-[100] grid place-items-center
        bg-black/70 p-4
      "
            role="dialog"
            aria-modal="true"
        >
            <button
                onClick={onClose}
                aria-label="Close video"
                className="
          absolute right-4 top-4 rounded-full bg-white/90 p-2
          shadow ring-1 ring-black/10 hover:scale-105 transition
        "
            >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                    <path d="M18.3 5.71 12 12.01l-6.29-6.3-1.41 1.42 6.29 6.29-6.3 6.29 1.42 1.41 6.29-6.29 6.29 6.29 1.41-1.41-6.29-6.29 6.3-6.29z" />
                </svg>
            </button>
            {children}
        </div>
    );
}
