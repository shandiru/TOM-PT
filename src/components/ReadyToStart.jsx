// components/ReadyToStart.jsx
import { memo } from "react";

/**
 * Props:
 * - imageSrc?: string (optional) -> if provided, shows the foreground image
 * - ctaHref?: string
 * - onCtaClick?: () => void
 */
function ReadyToStart({ imageSrc = "", ctaHref = "/appointment/", onCtaClick }) {
    return (
        <section className="w-full bg-white py-16 md:py-24">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
                {/* Left: Decorative panel (no model image by default) */}
                <div className="relative">
                    <div className="relative overflow-hidden rounded-3xl">
                        {/* Lime panel */}
                        <div className="absolute inset-0 bg-lime-400" aria-hidden="true" />

                        {/* Dots pattern (top-right) */}
                        <DotsTopRight />

                        {/* BIG watermark text */}
                        <div
                            aria-hidden="true"
                            className="relative z-10 p-8 sm:p-10 lg:p-12"
                        >
                            <div className="text-[16vw] leading-none font-extrabold tracking-tight text-white/30 mix-blend-overlay md:text-[9rem]">
                                JUST
                            </div>
                            <div className="text-[16vw] -mt-5 leading-none font-extrabold tracking-tight text-white/30 mix-blend-overlay md:text-[9rem]">
                                DO IT
                            </div>
                        </div>

                        {/* Optional foreground image (adds nice hero feel if you pass imageSrc) */}
                        {imageSrc ? (
                            <img
                                src={imageSrc}
                                alt=""
                                className="relative z-20 mx-auto -mb-8 block w-[86%] max-w-[560px] object-contain md:-mb-14"
                                loading="lazy"
                            />
                        ) : (
                            // Subtle placeholder aspect to keep height balanced when no image
                            <div className="relative z-0 pb-[40%]" />
                        )}
                    </div>
                </div>

                {/* Right: Copy + CTA */}
                <div>
                    <h2 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl">
                        READY TO
                        <br />
                        GET STARTED
                    </h2>

                    <UnderlineDots className="mb-8" />

                    <p className="mb-6 max-w-xl text-lg text-gray-700">
                        Duis at consectetur lorem donec massa sapien faucibus et molestie.
                        Ut etiam sit amet nisl purus.
                    </p>

                    <h6 className="mb-4 text-xl font-semibold text-gray-900">
                        Never be bored by your fitness program again!
                    </h6>

                    <p className="mb-10 max-w-xl text-lg text-gray-700">
                        Membership is only $29.99/mo, that’s less than $1 a day!
                    </p>

                    <a
                        href={ctaHref}
                        onClick={onCtaClick}
                        className="inline-flex items-center justify-center rounded-xl bg-lime-400 px-8 py-4 text-base font-extrabold uppercase tracking-wide text-black shadow-sm transition hover:brightness-110 active:scale-[0.99]"
                    >
                        Join Now
                    </a>
                </div>
            </div>
        </section>
    );
}

export default memo(ReadyToStart);

/* ---------- small SVG helpers ---------- */

function UnderlineDots({ className = "" }) {
    return (
        <svg
            className={`h-3 w-44 text-lime-400 ${className}`}
            viewBox="0 0 176 12"
            fill="currentColor"
            aria-hidden="true"
        >
            {Array.from({ length: 16 }).map((_, i) => (
                <circle key={i} cx={i * 11 + 6} cy="6" r="3" />
            ))}
        </svg>
    );
}

function DotsTopRight() {
    return (
        <svg
            className="pointer-events-none absolute -top-6 right-4 z-0 h-28 w-28 text-lime-200 opacity-80 md:-top-10 md:right-8 md:h-36 md:w-36"
            viewBox="0 0 120 120"
            fill="currentColor"
            aria-hidden="true"
        >
            {Array.from({ length: 10 }).map((_, row) =>
                Array.from({ length: 10 }).map((__, col) => (
                    <circle key={`${row}-${col}`} cx={col * 12 + 6} cy={row * 12 + 6} r="3" />
                ))
            )}
        </svg>
    );
}
