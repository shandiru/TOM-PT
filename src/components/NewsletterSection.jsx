// NewsletterSection.jsx
import { useState } from "react";

export default function NewsletterSection() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [agree, setAgree] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, agree });
    };

    return (
        <section className="w-full bg-black py-20 md:py-28">
            <div className="mx-auto max-w-6xl px-6 text-center">
                <h2 className="mb-6 text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl md:text-5xl">
                    Subscribe to Newsletter
                </h2>

                <p className="mx-auto mb-12 max-w-4xl text-base leading-relaxed text-gray-300 md:text-lg">
                    Duis at consectetur lorem donec massa sapien faucibus et molestie. Ut etiam sit amet nisl
                    purus. Massa tempor nec feugiat nisl pretium.
                </p>

                <form onSubmit={handleSubmit} className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-[1fr_1fr_auto]">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="h-16 w-full rounded-md border border-white/10 bg-white/5 px-5 text-white placeholder-white/60 outline-none transition focus:border-white/30"
                        aria-label="Your Name"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-16 w-full rounded-md border border-white/10 bg-white/5 px-5 text-white placeholder-white/60 outline-none transition focus:border-white/30"
                        aria-label="Your Email Address"
                        required
                    />

                    <button
                        type="submit"
                        className="h-16 rounded-md bg-lime-400 px-8 text-base font-extrabold uppercase tracking-wide text-black transition hover:bg-lime-300 active:scale-[0.99]"
                        aria-label="Subscribe"
                    >
                        Subscribe
                    </button>
                </form>

                <label className="mx-auto mt-6 flex w-full max-w-6xl items-start gap-3 text-left text-sm text-gray-300">
                    <input
                        type="checkbox"
                        checked={agree}
                        onChange={(e) => setAgree(e.target.checked)}
                        className="mt-1 size-4 rounded border-white/20 bg-white/5 text-lime-400 accent-lime-400"
                        aria-label="Agree to terms"
                    />
                    <span>
                        Nec feugiat in fermentum posuere urna nec tincidunt praesent.
                    </span>
                </label>
            </div>
        </section>
    );
}
