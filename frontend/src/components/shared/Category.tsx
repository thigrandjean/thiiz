import { CategoryProps } from "../../../types/types";

export function Category({ title, description }: CategoryProps) {
  return (
    <li className="flex flex-col gap-4 text-magenta w-full max-w-4xl">
      <div className="flex justify-between items-center gap-4">
        <h2 className="text-current uppercase font-bold text-5xl">{title}</h2>
        <p className="text-light-grey text-2xl">{description}</p>
      </div>
      <div className="w-full h-2 rounded-full bg-current" />
    </li>
  );
}
