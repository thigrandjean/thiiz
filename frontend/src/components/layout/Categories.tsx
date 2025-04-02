import { CategoriesProps } from "../../../types/types";
import { Category } from "../shared/Category";
import { StrapiImage } from "../StrapiImage";

export function Categories({ categoriesBox }: CategoriesProps) {
  console.dir(categoriesBox, { depth: null });

  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute flex items-center w-full h-fit justify-center">
        <StrapiImage
          className="object-cover object-center"
          src={categoriesBox.image.url}
          alt={` ${categoriesBox.image.alternatioveText} | "Categories section background image"`}
          width={categoriesBox.image.width}
          height={categoriesBox.image.height}
        />
      </div>
      <ul className="px-4 py-8 flex flex-col items-center gap-8 relative">
        {categoriesBox.categories.map((category) => (
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
