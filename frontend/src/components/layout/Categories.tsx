import { CategoriesBoxProps } from "../../../types/types";
import { Category } from "../shared/Category";
import { StrapiImage } from "../StrapiImage";

export function Categories({ image, categories }: CategoriesBoxProps) {

  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center py-8">
      <div className="absolute flex items-center  w-full h-fit justify-center bg-cyan">
        <StrapiImage
          className="object-cover object-center w-full"
          src={image.url}
          alt={` ${image.alternatioveText} | "Categories section background image"`}
          width={image.width}
          height={image.height}
        />
      </div>
      <ul className="px-4 py-8 flex flex-col items-center w-full gap-16 relative">
        {categories.map((category) => (
          <Category
            title={category.title}
            description={category.description}
            key={category.id}
          />
        ))}
      </ul>
    </section>
  );
}
