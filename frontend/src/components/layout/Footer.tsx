import { FooterProps } from "../../../types/types";
import { LinkCta } from "../shared/CtaLink";
import { Logo } from "../shared/Logo";
import { SocialLink } from "../shared/SocialLink";

type FooterComponentProps = {
  footer: FooterProps
}

export function Footter({ footer }: FooterComponentProps) {
  return (
    <footer className="flex flex-col items-center py-8 gap-8">
      <LinkCta
        href={footer.link.href}
        icon="send"
        intent="outline"
        label={footer.link.label}
      />
      <div className="flex gap-4">
        {footer.socialLinks.map((item) => (
          <SocialLink key={item.id} item={item} />
        ))}
      </div>
      <Logo className="text-primary" />
    </footer>
  );
}
