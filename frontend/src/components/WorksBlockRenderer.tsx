import { WorkBlock } from "../../types/types";
import { StrapiImage } from "./StrapiImage";

function blockRenderer(block: WorkBlock, index: number) {
  switch (block.__component) {
    case "blocks.text-content":
      return <p className="text-primary" key={index}>{block.text}</p>
    case "blocks.gallery":
      return (
        <div key={index}>
          {block.images.map(image => (
            <StrapiImage
              key={image.id}
              src={image.url}
              alt={`${image.alternativeText} | Image ${image.id}`}
              width={image.width}
              height={image.height}
            />
          ))}
        </div>)
  }
}

export function WorksBlockRenderer({ blocks }: { blocks: WorkBlock[] }) {
  return blocks.map((block, index) => blockRenderer(block, index))
}
