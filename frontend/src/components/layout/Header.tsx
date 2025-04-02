import { HeaderProps } from "../../../types/types";
import { LinkCta } from "../shared/CtaLink";
import { Logo } from "../shared/Logo";

export function Header({ header }: HeaderProps) {
  return (
    <header className="text-primary fixed top-0 w-full items-center flex justify-center">
      <nav className="flex w-full  justify-around p-8">
        <Logo />
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
