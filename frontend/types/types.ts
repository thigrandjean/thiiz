export type CtaLinkProps = {
  href: string;
  label: string;
  intent?: "primary" | "outline";
  icon?: "send" | "arrow";
};

export type HeaderProps = {
  header: {
    link: CtaLinkProps;
  };
};
