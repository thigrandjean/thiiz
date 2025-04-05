import Link from "next/link"
import { CategoriesList, CategoryProps, StrapiImageProps } from "../../types/types"
import { StrapiImage } from "./StrapiImage"
import { cva, VariantProps } from "class-variance-authority"
import { Box, ChevronsRight, CodeXml, Film, LayoutDashboard } from "lucide-react"

type WorksCardProps = {
  image: StrapiImageProps
  title: string
  excerpt: string
  slug: string
  category: CategoryProps
}
export type WorksCardVariants = VariantProps<typeof worksCardsVariants>

const worksCardsVariants = cva("border-2 w-full max-w-xl rounded-xl group p-4 flex flex-col gap-4 transition-all",
  {
    variants: {
      style: {
        "3D": "text-primary border-primary hover:hover:bg-primary/10",
        Motion: "text-green border-green hover:bg-green/10",
        Design: "text-magenta border-magenta hover:bg-magenta/10",
        Web: "text-cyan border-cyan hover:bg-cyan/10"
      }
    }
  })

export function WorksCard({ image, title, excerpt, slug, category }: WorksCardProps) {

  const style: CategoriesList = category.title

  return (
    <article className="w-full flex flex-col items-center">
      <Link href={slug} className={worksCardsVariants({ style })} >
        <div className="flex items-center w-full group h-52 md:h-80 bg-cyan justify-center overflow-hidden rounded-lg">
          <StrapiImage
            className='object-cover w-full h-full group-hover:scale-105 transition-all duration-500'
            src={image.url}
            alt={`${image.alternativeText} | "Hero Image"`}
            width={image.width}
            height={image.height} />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <div><h2 className="flex items-center gap-2 text-current font-bold text-xl uppercase group-hover:text-light-grey transition-all duration-500">
              <span>
                {categoryIcon(category.title)}
              </span>
              {title}
            </h2>
            </div>
            <div className="text-light-grey">{excerpt}</div>
          </div>
          <div className="rounded-full p-2 border-2 border-current flex items-center justify-center group-hover:bg-current transition-all duration-500 delay-100">
            <ChevronsRight className="group-hover:text-dark-grey transition-all duration-500 delay-100" />
          </div>
        </div>
      </Link>
    </article >
  )
}

function categoryIcon(category: CategoriesList) {
  switch (category) {
    case "3D":
      return <Box size={20} />
    case "Motion":
      return <Film size={20} />
    case "Design":
      return <LayoutDashboard size={20} />
    case "Web":
      return <CodeXml />
  }
}
