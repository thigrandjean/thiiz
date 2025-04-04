import { Categories } from "@/components/layout/Categories";
import { Hero } from "@/components/layout/Hero";
import { getHome } from "@/data/loaders";

async function loader() {
  const { data } = await getHome();
  if (!data) throw new Error("Failed to fetch global setting");
  return { data };
}
export default async function Home() {
  const { data } = await loader();
  return (
    <main className="flex flex-col gap-8">
      <Hero hero={data.hero} />
      <Categories {...data.categoriesBox} />
    </main>
  );
}
