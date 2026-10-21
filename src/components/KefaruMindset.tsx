import { useEffect, useRef, type CSSProperties } from "react";
import {
  ShieldCheck,
  Cloud,
  LayoutGrid,
  BrainCircuit,
  BarChart3,
  Users,
  RefreshCw,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import mascot from "@/assets/kefaru-mascot.png";

/* Reveal-on-scroll: adds .is-visible once the element enters the viewport */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

/* Salesforce logo drawn as a cloud mark (independently animated like the other badges) */
function SalesforceMark() {
  return (
    <svg viewBox="0 0 64 44" className="h-8 w-11" aria-hidden="true">
      <path
        d="M46.5 42.5H15.9c-5.3 0-9.6-4.3-9.6-9.6 0-4.8 3.5-8.7 8.1-9.4.6-5.9 5.6-10.5 11.7-10.5 4.9 0 9.1 3 10.8 7.3 1.2-.7 2.6-1.1 4.1-1.1 4.5 0 8.2 3.7 8.2 8.2 0 .5-.1 1-.2 1.6 3.6.8 6.3 4 6.3 7.8 0 3.3-4 6.7-8.8 6.7z"
        fill="#00A1E0"
      />
      <text
        x="31"
        y="30"
        textAnchor="middle"
        fontSize="8.5"
        fontStyle="italic"
        fontWeight="700"
        fill="#ffffff"
        fontFamily="Poppins, sans-serif"
      >
        salesforce
      </text>
    </svg>
  );
}

type Badge = {
  key: string;
  label?: string;
  icon?: LucideIcon;
  custom?: "salesforce";
  pos: CSSProperties;
  size: "md" | "lg";
  float: string;
  dur: string;
  popDelay: number;
};

const badges: Badge[] = [
  {
    key: "security",
    label: "Security",
    icon: ShieldCheck,
    pos: { left: "14%", top: "18%" },
    size: "md",
    float: "f1",
    dur: "5.2s",
    popDelay: 500,
  },
  {
    key: "ai",
    label: "AI",
    icon: BrainCircuit,
    pos: { left: "86%", top: "13%" },
    size: "md",
    float: "f2",
    dur: "6.1s",
    popDelay: 650,
  },
  {
    key: "salesforce",
    custom: "salesforce",
    pos: { left: "91%", top: "47%" },
    size: "lg",
    float: "f3",
    dur: "6.8s",
    popDelay: 800,
  },
  {
    key: "cloud",
    label: "Cloud",
    icon: Cloud,
    pos: { left: "9%", top: "46%" },
    size: "md",
    float: "f4",
    dur: "5.6s",
    popDelay: 720,
  },
  {
    key: "automation",
    label: "Automation",
    icon: LayoutGrid,
    pos: { left: "17%", top: "76%" },
    size: "md",
    float: "f5",
    dur: "6.4s",
    popDelay: 900,
  },
  {
    key: "data",
    label: "Data",
    icon: BarChart3,
    pos: { left: "83%", top: "78%" },
    size: "md",
    float: "f6",
    dur: "5.9s",
    popDelay: 1050,
  },
];

const values: { num: string; title: string; desc: string; icon: LucideIcon }[] = [
  {
    num: "01",
    title: "Strong Foundation",
    desc: "Scalable, secure and future-ready technology built to support your business as it grows.",
    icon: ShieldCheck,
  },
  {
    num: "02",
    title: "Adaptive by Design",
    desc: "Flexible solutions that evolve with your changing needs and market demands.",
    icon: RefreshCw,
  },
  {
    num: "03",
    title: "Built to Move Forward",
    desc: "From ideas to implementation, we turn technology into real progress.",
    icon: TrendingUp,
  },
  {
    num: "04",
    title: "Human + Technology",
    desc: "Powerful technology, designed around people — built to serve your team and your customers.",
    icon: Users,
  },
];

function MascotStage() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal relative mx-auto w-full max-w-[440px] sm:max-w-[520px] lg:max-w-[560px]"
    >
      <div className="relative aspect-[10/11]">
        {/* Pulsing glow + rotating light sweep + echo ring */}
        <div className="stage-glow" />
        <div className="stage-sweep" />
        <div className="stage-echo" />

        {/* Orbit rings with independently travelling dots */}
        <svg
          className="absolute inset-0 h-full w-full text-brand-blue"
          viewBox="0 0 600 600"
          fill="none"
          aria-hidden="true"
        >
          <g className="ring-spin" style={{ animationDuration: "70s" }}>
            <circle
              cx="300"
              cy="300"
              r="252"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="3 10"
              opacity="0.5"
            />
          </g>
          <g className="ring-spin-rev" style={{ animationDuration: "90s" }}>
            <circle
              cx="300"
              cy="300"
              r="208"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeDasharray="70 46"
              opacity="0.35"
            />
          </g>
          <g className="ring-spin" style={{ animationDuration: "16s" }}>
            <circle cx="300" cy="48" r="5" fill="var(--brand-navy)" />
            <circle
              cx="300"
              cy="552"
              r="3.5"
              fill="currentColor"
              transform="rotate(140 300 300)"
            />
          </g>
          <g className="ring-spin-rev" style={{ animationDuration: "24s" }}>
            <circle
              cx="300"
              cy="92"
              r="4"
              fill="currentColor"
              transform="rotate(70 300 300)"
            />
          </g>
          <g className="ring-spin" style={{ animationDuration: "31s" }}>
            <circle
              cx="300"
              cy="130"
              r="3"
              fill="var(--brand-navy)"
              opacity="0.7"
              transform="rotate(205 300 300)"
            />
          </g>
        </svg>

        {/* Mascot */}
        <div
          className="mascot-pop absolute inset-x-0 bottom-0 flex justify-center"
          style={{ "--reveal-delay": "150ms" } as CSSProperties}
        >
          <div className="float-body">
            <img
              src={mascot}
              alt="Kefaru Tech rhino mascot with arms crossed"
              width={517}
              height={1032}
              className="h-[86%] w-auto max-w-none"
              fetchPriority="high"
            />
          </div>
        </div>

        {/* Independently animated orbiting badges */}
        {badges.map((b) => (
          <div
            key={b.key}
            className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
            style={{ ...b.pos, "--pop-delay": `${b.popDelay}ms` } as CSSProperties}
          >
            <div className="badge-pop">
              <div className={b.float} style={{ animationDuration: b.dur }}>
                <div className={`badge-circle ${b.size === "lg" ? "badge-lg" : "badge-md"}`}>
                  <div className="badge-inner">
                    {b.custom === "salesforce" ? (
                      <SalesforceMark />
                    ) : (
                      b.icon && <b.icon className="h-6 w-6" strokeWidth={1.8} />
                    )}
                  </div>
                </div>
                {b.label && <p className="badge-label">{b.label}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function KefaruMindsetSection() {
  const headerRef = useReveal<HTMLDivElement>();
  const listRef = useReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-28">
      {/* Soft diagonal light-blue wash, echoing the reference art direction */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 bottom-0 h-[420px] w-[720px] -rotate-12 bg-gradient-to-tr from-brand-glow/60 via-brand-sky/40 to-transparent blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[360px] w-[560px] rotate-12 bg-gradient-to-bl from-brand-sky/50 to-transparent blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10 xl:gap-16">
        {/* Left column: copy + mascot */}
        <div>
          <div ref={headerRef}>
            <div className="reveal flex items-center gap-5" style={{ "--reveal-delay": "0ms" } as CSSProperties}>
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-navy">
                Meet the Kefaru Mindset
              </span>
              <span className="hidden h-px flex-1 origin-left bg-brand-navy/25 sm:block" />
            </div>

            <h2 className="reveal mt-5 text-3xl font-bold leading-[1.18] tracking-tight text-brand-navy sm:text-4xl lg:text-[2.75rem]">
              More Than Technology.
              <span className="line-mask mt-1 block">
                <span
                  className="line-inner"
                  style={{ "--reveal-delay": "120ms" } as CSSProperties}
                >
                  A way of Moving Business Forward.
                </span>
              </span>
            </h2>

            <p
              className="reveal mt-6 max-w-lg text-base leading-relaxed text-brand-body"
              style={{ "--reveal-delay": "220ms" } as CSSProperties}
            >
              At Kefaru, we combine innovation, expertise and a fearless mindset
              to build technology that helps businesses grow, adapt and lead —
              today and tomorrow.
            </p>
          </div>

          <MascotStage />
        </div>

        {/* Right column: value list */}
        <div ref={listRef} className="max-w-xl lg:justify-self-end">
          <ol>
            {values.map((v, i) => (
              <li
                key={v.num}
                className="value-item group reveal border-b border-brand-sky pb-8 pt-8 first:pt-0 last:border-b-0 last:pb-0"
                style={{ "--reveal-delay": `${i * 140}ms` } as CSSProperties}
              >
                <div className="flex items-start gap-6">
                  <div className="icon-chip">
                    <v.icon className="h-7 w-7" strokeWidth={1.7} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="value-num">{v.num}</span>
                    <h3 className="value-title">{v.title}</h3>
                    <p className="value-desc">{v.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
