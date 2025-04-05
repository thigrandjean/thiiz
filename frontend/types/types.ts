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
  link: CtaLinkProps;
};

export type SocialLinksProps = {
  id?: number;
  url: string;
};

export type FooterProps = {
  link: CtaLinkProps;
  socialLinks: SocialLinksProps[];
};

export type GlobalProps = {
  title: string
  decription: string
  header: HeaderProps
  footer: FooterProps
}

export type GlobalResponseProps = {
  data: GlobalProps
}

export type HeroProps = {
  title: string;
  bio: string;
  image: StrapiImageProps;
};
export type CategoriesList = "3D" | "Motion" | "Design" | "Web"

export type CategoryProps = {
  id?: number;
  title: CategoriesList
  description: string;
};

export type CategoriesBoxProps = {
  image: StrapiImageProps
  categories: CategoryProps[]
}

export type HomeProps = {
  hero: HeroProps
  categoriesBox: CategoriesBoxProps
}

export type HomeResponseProps = {
  data: HomeProps
}



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

export type WorksSlugProps = {
  data: 
}
