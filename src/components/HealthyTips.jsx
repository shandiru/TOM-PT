// components/HealthyTips.jsx
import React from "react";

/**
 * Props (optional):
 * - heading: string
 * - description: string
 * - ctaText: string
 * - ctaHref: string
 * - posts: Array<{
 *     id: string | number
 *     title: string
 *     href: string
 *     image: string
 *     date: string
 *     tags?: string[]
 *     excerpt?: string
 *     author?: string
 *   }>
 */
export default function HealthyTips({
    heading = "Healthy Tips & Tricks",
    description = "Duis at consectetur lorem donec massa sapien faucibus et molestie. Ut etiam sit amet nisl purus. Massa tempor nec feugiat nisl pretium.",
    ctaText = "View all tips",
    ctaHref = "/blog/",
    posts = DEFAULT_POSTS,
}) {
    return (
        <section className="w-full bg-white py-16">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 xl:grid-cols-3">
                {/* Left column: heading/cta */}
                <div className="flex flex-col justify-center">
                    <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        {heading}
                    </h2>
                    <p className="mb-8 text-gray-600">{description}</p>

                    <a
                        href={ctaHref}
                        className="inline-flex w-fit items-center justify-center rounded-xl bg-red-400 px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-black transition hover:brightness-110 active:scale-[0.99]"
                    >
                        {ctaText}
                    </a>
                </div>

                {/* Middle & right columns: posts */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:col-span-2">
                    {posts.slice(0, 3).map((p) => (
                        <PostCard key={p.id} post={p} />
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---- Post Card ---- */
function PostCard({ post }) {
    const { title, href, image, date, tags = [], excerpt, author } = post;

    return (
        <article className="group overflow-hidden rounded-2xl border border-gray-100 shadow-sm transition hover:shadow-lg">
            <figure className="relative aspect-[3/2] w-full overflow-hidden bg-gray-100">
                <a href={href} className="absolute inset-0">
                    <img
                        src={image}
                        alt={title}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                </a>
            </figure>

            <div className="space-y-3 p-5">
                {/* Tags */}
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {tags.map((t, i) => (
                            <span
                                key={`${t}-${i}`}
                                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                )}

                {/* Title */}
                <h3 className="text-xl font-semibold leading-snug text-gray-900">
                    <a href={href} className="transition hover:text-red-600">
                        {title}
                    </a>
                </h3>

                {/* Excerpt (optional) */}
                {excerpt && <p className="text-sm text-gray-600">{excerpt}</p>}

                {/* Read more + date/author */}
                <div className="flex items-center justify-between pt-2">
                    <a
                        href={href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition hover:text-red-600"
                    >
                        Read More
                        <ArrowRightIcon className="h-4 w-4" />
                    </a>

                    <div className="flex items-center gap-3 text-xs text-gray-500">
                        {author && (
                            <span>
                                <span className="text-gray-400">By</span> {author}
                            </span>
                        )}
                        <span className="inline-flex items-center gap-1">
                            <CalendarIcon className="h-4 w-4" />
                            {date}
                        </span>
                    </div>
                </div>
            </div>
        </article>
    );
}

/* ---- Tiny inline icons (no external libs) ---- */
function ArrowRightIcon({ className = "h-4 w-4" }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M13.172 12 8.222 7.05 9.636 5.636 16 12l-6.364 6.364-1.414-1.414L13.172 12z" />
        </svg>
    );
}

function CalendarIcon({ className = "h-4 w-4" }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M7 2h2v2h6V2h2v2h3a2 2 0 0 1 2 2v3H2V6a2 2 0 0 1 2-2h3V2Zm15 9v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9h20ZM6 14h4v4H6v-4Z" />
        </svg>
    );
}

/* ---- Demo content (replace with real data) ---- */
const DEFAULT_POSTS = [
    {
        id: 1,
        title: "How diet influences flexibility",
        href: "https://samantha.bslthemes.com/2022/10/21/how-diet-influences-flexibility/",
        image:
            "https://samantha.bslthemes.com/wp-content/uploads/2022/10/ketogenic-low-carbs-diet-food-selection-white-wall-950x633.jpeg",
        date: "October 21, 2022",
        tags: ["Lifestyle"],
    },
    {
        id: 2,
        title: "Training at home: how to maintain the tone",
        href: "https://samantha.bslthemes.com/2022/10/21/training-at-home-how-to-maintain-the-tone/",
        image:
            "https://samantha.bslthemes.com/wp-content/uploads/2022/10/full-shot-woman-stretching-indoors-950x633.jpeg",
        date: "October 21, 2022",
        tags: ["Fitness", "Health"],
        excerpt:
            "Consectetur adipisicing elit. Soluta, impedit, saepe. Unde minima distinctio officiis..",
        author: "Hana Evans",
        // you can add share buttons separately if needed
    },
    {
        id: 3,
        title: "5 reasons to start playing sports",
        href: "https://samantha.bslthemes.com/2022/10/10/5-reasons-to-start-playing-sports/",
        image:
            "https://samantha.bslthemes.com/wp-content/uploads/2022/10/portrait-of-pretty-sporty-woman-holding-weights-isolated-on-white-wall-950x633.jpeg",
        date: "October 10, 2022",
        tags: ["Lifestyle"],
    },
];
