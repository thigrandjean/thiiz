import { CategoryProps } from "../../../types/types";

export function Category({ title, description }: CategoryProps) {
  return (
    <li className="flex flex-col gap-2 text-magenta w-full max-w-4xl">
      <div className="flex justify-between items-center gap-4">
        <h2 className="text-current uppercase font-bold text-3xl md:text-5xl sm:text-4xl">{title}</h2>
        <p className="text-light-grey text-md md:text-2xl sm:text-xl">{description}</p>
      </div>
      <div className="w-full h-2 rounded-full bg-current" />
    </li>
  );
}
