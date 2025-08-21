'use client';
import React, { useRef, useState, useCallback } from 'react';

export default function RealResultsSection() {
  const resultsData = [
    {
      id: 'slide-1',
      before: 'https://samantha.bslthemes.com/wp-content/uploads/2023/02/slider-3.jpg',
      after: 'https://samantha.bslthemes.com/wp-content/uploads/2023/02/slider-3-a.jpg',
      quote:
        'Suspendisse in est ante in nibh mauris cursus mattis molestie. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Feugiat in fermentum posuere urna nec tincidunt praesent semper.',
      avatar: 'https://samantha.bslthemes.com/wp-content/uploads/2023/02/slider-na-2-140x140.png',
      name: 'Annie Parson',
      tag: 'Weeks Workouts',
    },
    {
      id: 'slide-2',
      before: 'https://samantha.bslthemes.com/wp-content/uploads/2023/02/slider-2.jpg',
      after: 'https://samantha.bslthemes.com/wp-content/uploads/2023/02/slider-2-a.jpg',
      quote:
        'Suspendisse in est ante in nibh mauris cursus mattis molestie. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Feugiat in fermentum posuere urna nec tincidunt praesent semper.',
      avatar: 'https://samantha.bslthemes.com/wp-content/uploads/2023/02/slider-na-3-140x140.png',
      name: 'Annie Parson',
      tag: 'Weeks Workouts',
    },
    {
      id: 'slide-3',
      before: 'https://samantha.bslthemes.com/wp-content/uploads/2023/02/slider-1.jpg',
      after: 'https://samantha.bslthemes.com/wp-content/uploads/2023/02/slider-1-a.jpg',
      quote:
        'Suspendisse in est ante in nibh mauris cursus mattis molestie. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Feugiat in fermentum posuere urna nec tincidunt praesent semper.',
      avatar: 'https://samantha.bslthemes.com/wp-content/uploads/2023/02/slider-na-1-140x140.png',
      name: 'Annie Parson',
      tag: 'Weeks Workouts',
    },
    {
      id: 'slide-4',
      before: 'https://samantha.bslthemes.com/wp-content/uploads/2023/02/slider-1.jpg',
      after: 'https://samantha.bslthemes.com/wp-content/uploads/2023/02/slider-1-a.jpg',
      quote:
        'Suspendisse in est ante in nibh mauris cursus mattis molestie. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Feugiat in fermentum posuere urna nec tincidunt praesent semper.',
      avatar: 'https://samantha.bslthemes.com/wp-content/uploads/2023/02/slider-na-1-140x140.png',
      name: 'Annie Parson',
      tag: 'Weeks Workouts',
    },
  ];

  /* ===== Before/After state per slide ===== */
  const [posMap, setPosMap] = useState(() =>
    Object.fromEntries(resultsData.map((i) => [i.id, 50]))
  );
  const containersRef = useRef({}); // { [id]: HTMLDivElement | null }

  const setContainerRef = (id) => (el) => {
    containersRef.current[id] = el;
  };

  const updateFromClientX = useCallback((id, clientX) => {
    const el = containersRef.current[id];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    const pct = Math.round((x / rect.width) * 100);
    setPosMap((m) => ({ ...m, [id]: pct }));
  }, []);

  const onMouseDown = (id, e) => {
    e.preventDefault();
    updateFromClientX(id, e.clientX);
    const onMove = (ev) => updateFromClientX(id, ev.clientX);
    const onUp = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  const onTouchStart = (id, e) => {
    if (e.touches?.[0]) updateFromClientX(id, e.touches[0].clientX);
  };
  const onTouchMove = (id, e) => {
    if (e.touches?.[0]) updateFromClientX(id, e.touches[0].clientX);
  };

  /* ===== Carousel controls ===== */
  const scrollerRef = useRef(null);

  const scrollByCard = (dir = 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const first = el.firstElementChild;
    let gap = 0;
    try {
      const cs = getComputedStyle(el);
      gap = parseFloat(cs.columnGap || cs.gap || '0') || 0;
    } catch { }
    const cardWidth = first
      ? (first.getBoundingClientRect().width + gap)
      : Math.round(el.clientWidth * 0.8);
    el.scrollBy({ left: dir * cardWidth, behavior: 'smooth' });
  };

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Real people. Real Results
        </h3>
        <p className="mt-3 text-gray-600">
          Duis at consectetur lorem donec massa sapien faucibus et molestie. Ut etiam sit amet
          nisl purus. Massa tempor nec feugiat nisl pretium.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div
          ref={scrollerRef}
          className="mt-8 flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4
                     [scrollbar-width:none] [-ms-overflow-style:none]"
        >
          {/* Hide scrollbar (webkit) */}
          <style>{`div::-webkit-scrollbar{display:none;}`}</style>

          {resultsData.map((item) => (
            <div
              key={item.id}
              className="snap-center shrink-0 basis-[85%] sm:basis-[60%] md:basis-[48%] lg:basis-[460px]"
            >
              <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                {/* Before/After slider */}
                <div
                  ref={setContainerRef(item.id)}
                  className="relative aspect-[4/5] w-full overflow-hidden rounded-xl"
                  onMouseDown={(e) => onMouseDown(item.id, e)}
                  onTouchStart={(e) => onTouchStart(item.id, e)}
                  onTouchMove={(e) => onTouchMove(item.id, e)}
                  role="region"
                  aria-label="Before and after comparison slider"
                >
                  {/* Before image */}
                  <img
                    src={item.before}
                    alt="before"
                    className="absolute inset-0 h-full w-full object-cover select-none"
                    draggable="false"
                  />
                  {/* After image (clipped by width) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${posMap[item.id]}%` }}
                  >
                    <img
                      src={item.after}
                      alt="after"
                      className="h-full w-full object-cover select-none"
                      draggable="false"
                    />
                  </div>

                  {/* Divider / handle */}
                  <div
                    className="absolute top-0 h-full w-0.5 -translate-x-1/2 bg-lime-400/70"
                    style={{ left: `${posMap[item.id]}%` }}
                  >
                    <div className="absolute left-1/2 top-1/2 grid h-8 w-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-lime-400">
                      <div className="relative flex items-center">
                        <i
                          className="mr-1 inline-block"
                          style={{
                            borderStyle: 'solid',
                            borderColor: '#fff',
                            borderWidth: '0 2px 2px 0',
                            padding: 3,
                            transform: 'rotate(135deg)',
                          }}
                        />
                        <i
                          className="inline-block"
                          style={{
                            borderStyle: 'solid',
                            borderColor: '#fff',
                            borderWidth: '2px 0 0 2px',
                            padding: 3,
                            transform: 'rotate(135deg)',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="mt-5 rounded-xl bg-gray-50 p-4 text-gray-700">
                  <p className="text-sm leading-relaxed">{item.quote}</p>
                </blockquote>

                {/* Author */}
                <div className="mt-4 flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h5 className="text-sm font-semibold text-gray-900">{item.name}</h5>
                    <p className="text-xs text-gray-500">{item.tag}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prev / Next (visible on all breakpoints, above content) */}
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 inline-flex items-center justify-center rounded-full border bg-white p-2 shadow hover:bg-gray-50"
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 inline-flex items-center justify-center rounded-full border bg-white p-2 shadow hover:bg-gray-50"
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </section>
  );
}
