import { getAllWorksSlugs, getWorksBySlug } from "@/data/loaders"
import { notFound } from "next/navigation"
import { WorkProps } from "../../../types/types";
import { StrapiImage } from "@/components/StrapiImage";
import { WorksBlockRenderer } from "@/components/WorksBlockRenderer";

export async function generateStaticParams() {
  const works = await getAllWorksSlugs();
  return works.data.map((work: WorkProps) => ({
    slug: work.slug,
  }));
}

type WorkPageProps = {
  params: Promise<{ slug: string }>
}

type WorkResponse = {
  data: WorkProps[];
};

export default async function SingleWork({ params }: WorkPageProps) {
  const resolveParams = await params
  const slug = resolveParams?.slug

  const data = await getWorksBySlug(slug) as WorkResponse
  const work = data?.data[0]

  console.dir(work, { depth: null })

  if (!work) notFound()

  return (
    <article>
      <div>
        <StrapiImage
          src={work.featuredImage.url}
          alt={`${work.featuredImage.alternativeText} | "Article featured Imge"`}
          width={work.featuredImage.width}
          height={work.featuredImage.height}
        />
      </div>
      <h1 className="text-primary font-bold uppercase text-4xl">{work.title}</h1>
      <WorksBlockRenderer blocks={work.content} />
    </article>
  )
}
