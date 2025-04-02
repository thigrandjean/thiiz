import { SocialLinksProps } from "../../../types/types";
import { FaBehance, FaInstagram } from "react-icons/fa";
type SociaIconProps = {
  item: SocialLinksProps;
};
export function SocialLink({ item }: SociaIconProps) {
  const getIcon = () => {
    const domain = item.url
      .toLowerCase()
      .replace("https://", "")
      .replace("http://", "")
      .replace("www.", "")
      .split("/")[0]
      .split("?")[0];

    switch (true) {
      case domain.includes("instagram"):
        return <FaInstagram size={24} />;
      case domain.includes("behance"):
        return <FaBehance size={24} />;
      default:
        return null;
    }
  };

  return (
    <a
      className="bg-primary flex items-center justify-center p-2 rounded-full text-dark-grey hover:bg-magenta hover:scale-110 hover:text-light-grey transition-all"
      href={item.url}
      target="_blank"
    >
      {getIcon()}
    </a>
  );
}
