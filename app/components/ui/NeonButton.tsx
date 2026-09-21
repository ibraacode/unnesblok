import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "green" | "cyan" | "purple" | "outline";
  external?: boolean;
  className?: string;
};

const variants = {
  green:
    "bg-neon-green text-black hover:shadow-[0_0_30px_-2px_rgba(34,255,136,0.9)]",
  cyan:
    "bg-neon-cyan text-black hover:shadow-[0_0_30px_-2px_rgba(0,229,255,0.9)]",
  purple:
    "bg-neon-purple text-white hover:shadow-[0_0_30px_-2px_rgba(176,38,255,0.9)]",
  outline:
    "border border-neon-green/60 text-neon-green hover:bg-neon-green/10 hover:shadow-[0_0_24px_-4px_rgba(34,255,136,0.8)]",
};

export default function NeonButton({
  href,
  children,
  variant = "green",
  external,
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm sm:text-base font-bold tracking-wide transition-all duration-300 active:scale-95";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}