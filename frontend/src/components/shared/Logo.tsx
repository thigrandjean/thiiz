import { HTMLAttributes } from "react";

type LogoProps = HTMLAttributes<HTMLDivElement>;

export function Logo({ className }: LogoProps) {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="29"
        fill="none"
      >
        <path
          fill="currentColor"
          d="M21.438 25.9c0-.928.32-1.664.96-2.208.672-.576 1.44-.864 2.304-.864.768 0 1.52.272 2.256.816.736.512 1.104 1.216 1.104 2.112 0 .928-.336 1.68-1.008 2.256-.672.576-1.44.864-2.304.864-.768 0-1.52-.272-2.256-.816-.704-.544-1.056-1.264-1.056-2.16ZM0 .316h24.816v4.656h-1.008c0-1.536-.56-2.544-1.68-3.024h-6.672v24.48c.288.64 1.296.96 3.024.96v1.008H6.336v-1.008c1.728 0 2.736-.32 3.024-.96V1.948H2.688c-1.12.48-1.68 1.488-1.68 3.024H0V.316Z"
        />
      </svg>
    </div>
  );
}
