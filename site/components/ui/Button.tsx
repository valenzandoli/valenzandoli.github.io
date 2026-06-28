import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  if (variant === "secondary") {
    return (
      <Link
        href={href}
        className="text-sm text-muted underline-offset-4 transition-colors hover:text-text hover:underline"
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="rounded-md bg-accent/90 px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-85"
    >
      {children}
    </Link>
  );
}
