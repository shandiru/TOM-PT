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
        {/* Left: Decorative panel */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl w-full h-full">
            {/* red panel */}
            <div className="absolute inset-0" aria-hidden="true" />

            {/* Dots pattern (top-right) */}
            <DotsTopRight />

            {/* BIG watermark text with responsive background */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-auto"
              style={{ backgroundImage: `url('/background.jpg')` }}
            ></div>

            {/* Foreground image (fully responsive) */}
            <img
              src={imageSrc || "/jump.png"}
              alt=""
              className="relative w-full h-auto object-contain"
              loading="lazy"
            />
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
            Your fitness journey doesn’t have to be complicated or boring. With
            the right plan, the right support, and a little consistency — you’ll
            be surprised how quickly things change.
          </p>

          <h6 className="mb-4 text-xl font-semibold text-gray-900">
            Never be bored by your workouts again.
          </h6>

          <p className="mb-5 max-w-xl text-lg text-gray-700">
            Build strength, lose fat, and feel your best.
          </p>
          <p className="mb-5 max-w-xl text-lg text-gray-700">
            Support every step of the way.
          </p>
          <p className="mb-10 max-w-xl text-lg text-gray-700">
            Call today and let’s talk about how we can kickstart your
            transformation!
          </p>
          <a
            href={ctaHref}
            onClick={onCtaClick}
            className="inline-flex items-center justify-center rounded-xl bg-red-400 px-8 py-4 text-base font-extrabold uppercase tracking-wide text-black shadow-sm transition hover:brightness-110 active:scale-[0.99]"
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
      className={`h-3 w-44 text-red-400 ${className}`}
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
      className="pointer-events-none absolute -top-6 right-4 z-0 h-28 w-28 text-red-200 opacity-80 md:-top-10 md:right-8 md:h-36 md:w-36"
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
