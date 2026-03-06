import Link from "next/link";

type Colorset = "primary" | "secondary";
type Variant = "solid" | "outline";
type Size = "sm" | "md" | "lg";
type Shape = "default" | "pill";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  colorset?: Colorset;
  variant?: Variant;
  size?: Size;
  shape?: Shape;
  external?: boolean;
  disabled?: boolean;
  className?: string;
  leftIcon?: React.ReactNode;
}

const colorVariantClasses: Record<Colorset, Record<Variant, string>> = {
  primary: {
    solid: "bg-blue-500 text-white hover:bg-blue-600",
    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-50",
  },
  secondary: {
    solid:
      "bg-white text-black border border-zinc-200 hover:bg-zinc-100",
    outline:
      "border border-zinc-400 text-zinc-700 hover:bg-zinc-100",
  },
};

const sizeClasses: Record<Size, string> = {
  sm: "px-2 py-1 text-sm",
  md: "px-3.5 py-1.5 text-base",
  lg: "px-5 py-2 text-lg",
};

export default function Button({
  children,
  href,
  onClick,
  colorset = "primary",
  variant = "solid",
  size = "md",
  shape = "default",
  external = false,
  disabled = false,
  className = "",
  leftIcon,
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-150 cursor-pointer",
    shape === "pill" ? "rounded-full" : "rounded-lg",
    "disabled:opacity-50 disabled:pointer-events-none",
    colorVariantClasses[colorset][variant],
    sizeClasses[size],
    className,
  ].join(" ");

  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  const inner = leftIcon ? (
    <>
      <span className="inline-flex items-center shrink-0">{leftIcon}</span>
      <span className="relative top-px">{children}</span>
    </>
  ) : (
    children
  );

  return href ? (
    <Link href={href} className={classes} {...linkProps}>
      {inner}
    </Link>
  ) : (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {inner}
    </button>
  );
}

