import { HeaderProps } from "../../../types/types";
import { LinkCta } from "../shared/CtaLink";
import { Logo } from "../shared/Logo";

export function Header({ header }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full items-center flex justify-center z-30">
      <nav className="flex w-full justify-between px-8 py-8 max-w-6xl">
        <Logo className="text-primary" />
        <LinkCta
          href={header.link.href}
          label={header.link.label}
          intent="primary"
          icon="send"
        />
      </nav>
    </header>
  );
}
