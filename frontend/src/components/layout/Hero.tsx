import ReactMarkdown from "react-markdown";
import { HeroProps } from "../../../types/types";
import { StrapiImage } from "../StrapiImage";

type HeroSectionProps = {
  hero: HeroProps;
};

export function Hero({ hero }: HeroSectionProps) {
  return (
    <section className="relative w-full flex flex-col items-center px-4 gap-8">
      <div className="max-w-6xl w-full mt-4 h-[70vh] overflow-hidden rounded-lg flex flex-col justify-end relative">
        <h1 className="whitespace-pre-wrap text-primary font-bold uppercase text-center text-5xl mb-10 relative z-10 [&_strong]:text-secondary">
          <ReactMarkdown>{hero.title}</ReactMarkdown>
        </h1>
        <div className="absolute top-0 left-0 w-full h-full flex z-1 justify-center items-center">
          <StrapiImage
            className="w-full h-full relative object-cover"
            src={hero.image.url}
            width={hero.image.width}
            height={hero.image.height}
            alt={`${hero.image.alternatioveText} | "Hero Image"`}
          />
        </div>
      </div>
      <div className="text-light-grey py-4 [&_strong]:text-primary [&_p]:mb-4 text-xl max-w-4xl">
        <ReactMarkdown>{hero.bio}</ReactMarkdown>
      </div>
    </section>
  );
}
