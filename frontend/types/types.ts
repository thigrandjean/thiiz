export type StrapiImageProps = {
  id: number;
  url: string;
  width: number;
  height: number;
  alternatioveText: string;
};

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

export type SocialLinksProps = {
  id?: number;
  url: string;
};

export type FooterProps = {
  footer: {
    link: CtaLinkProps;
    socialLinks: SocialLinksProps[];
  };
};

export type HeroProps = {
  title: string;
  bio: string;
  image: StrapiImageProps;
};

export type CategoryProps = {
  id?: number;
  title: string;
  description: string;
};

export type CategoriesProps = {
  categoriesBox: {
    image: StrapiImageProps;
    categories: CategoryProps[];
  };
};

export type WorkProps = {
  id: number
  title: string
  slug: string
  excerpt: string
  category: CategoryProps
  featuredImage: StrapiImageProps
  date: Date
  text: string
  gallery: StrapiImageProps
}
