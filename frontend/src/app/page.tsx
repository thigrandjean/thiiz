import { Categories } from "@/components/layout/Categories";
import { Hero } from "@/components/layout/Hero";
import { WorksCard } from "@/components/WorksCard";
import { getHome, getWorks } from "@/data/loaders";
import { WorkProps } from "../../types/types";

async function loader() {
  const { data } = await getHome();
  if (!data) throw new Error("Failed to fetch global setting");
  return { data };
}

async function loadWorks() {
  const { data } = await getWorks(5)
  if (!data) throw new Error("Failed to fetch works")
  return { works: data as WorkProps[] }
}

export default async function Home() {
  const { data } = await loader();
  const { works } = await loadWorks()
  console.dir(works, { depth: null })
  return (
    <main className="flex flex-col gap-8">
      <Hero hero={data.hero} />
      <Categories {...data.categoriesBox} />
      <section className="flex flex-col gap-4 px-4 justify-center items-center w-full">
        {works.map((work) => (
          <WorksCard
            key={work.id}
            image={work.featuredImage}
            slug={work.slug} title={work.title}
            excerpt={work.excerpt}
            category={work.category} />
        ))}
      </section>
    </main>
  );
}
