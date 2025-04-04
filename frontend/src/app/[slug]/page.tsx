import { getAllWorksSlugs, getWorksBySlug } from "@/data/loaders"
import { notFound } from "next/navigation"
import { WorkProps } from "../../../types/types";

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

  if (!work) notFound()

  return (<>
    <h1>{work.title}</h1>
  </>)
}
