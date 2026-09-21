import Link from "next/link";
import { ReactNode } from "react";

type Variant = "yellow" | "blue" | "green" | "purple" | "red";
type Size = "sm" | "md" | "lg" | "xl";

type Props = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
};

const variants: Record<Variant, string> = {
  yellow: "btn-3d-yellow text-black",
  blue: "btn-3d-blue text-white",
  green: "btn-3d-green text-black",
  purple: "btn-3d-purple text-white",
  red: "btn-3d-red text-white",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2 rounded-lg border-3",
  md: "text-base px-5 py-2.5 rounded-xl border-3",
  lg: "text-lg md:text-xl px-6 py-3 rounded-xl border-3",
  xl: "text-xl md:text-3xl px-8 md:px-12 py-3.5 md:py-5 rounded-2xl border-4",
};

export default function Button3D({
  href,
  onClick,
  children,
  variant = "yellow",
  size = "md",
  external,
  className = "",
}: Props) {
  const base = `btn-3d ${variants[variant]} ${sizes[size]} border-black font-stumble uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-transform ${className}`;

  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={base}
      >
        {children}
      </a>
    );
  }
  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={base}>
      {children}
    </button>
  );
}