import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import { CtaLinkProps } from "../../../types/types";
import { Send } from "lucide-react";

export type LinkCtaVariantProps = VariantProps<typeof ctaLinkVariants>;

const ctaLinkVariants = cva(
  "rounded-md px-3 py-1.5 flex items-center uppercase justify-center gap-2",
  {
    variants: {
      intent: {
        primary: "bg-primary text-dark-grey",
        outline: "border border-primary text-primary",
      },
    },
  },
);

export function LinkCta({
  href,
  label,
  intent = "primary",
  icon,
}: CtaLinkProps) {
  return (
    <Link className={ctaLinkVariants({ intent })} href={href}>
      {label}
      {icon == "send" && <Send size={16} />}
    </Link>
  );
}
