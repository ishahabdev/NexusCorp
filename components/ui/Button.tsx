// components/shared/Button.tsx

import { cn } from "@/lib/utils";

export default function Button({
  children,
  variant = "default",
  size = "default",
  className = "",
  ...props
}: {
  children?: React.ReactNode;
  variant?: "default" | "outline" | "transparent" | "ghost";
  size?: "sm" | "default" | "lg" | "icon" | "icon-sm";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-sm text-sm font-medium transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    default:
      "bg-blue-600 text-white hover:bg-blue-700",

    outline:
      "border bg-white text-blue-600 hover:bg-gray-100",

    transparent:
      "bg-transparent border border-gray-400 text-black hover:bg-gray-100",

    ghost:
      "hover:bg-gray-100 hover:text-black",
  };

  const sizes = {
    sm:
      "px-4 py-1.5 text-xs",

    default:
      "px-7 py-3 text-sm",

    lg:
      "px-9 py-4 text-base",

    icon:
      "h-10 w-10 p-2",

    "icon-sm":
      "h-8 w-8 p-1.5",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}