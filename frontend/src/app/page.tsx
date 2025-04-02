import { Categories } from "@/components/layout/Categories";
import { Hero } from "@/components/layout/Hero";
import { getHome } from "@/data/loaders";

async function loader() {
  const { data } = await getHome();
  if (!data) throw new Error("Failed to fetch global setting");
  return { hero: data?.hero, categoriesBox: data?.categoriesBox };
}
export default async function Home() {
  const { hero, categoriesBox } = await loader();

  return (
    <main className="flex flex-col gap-8">
      <Hero hero={hero} />
      <Categories categoriesBox={categoriesBox} />
    </main>
  );
}
