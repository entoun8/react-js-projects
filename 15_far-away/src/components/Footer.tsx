import type { ItemType } from "../types";

interface FooterProps {
  items: ItemType[];
}

const Footer = ({ items }: FooterProps) => {
  const total = items.length;
  const checked = items.filter((item) => item.isChecked).length;
  const percentage = total === 0 ? 0 : Math.round((checked / total) * 100);

  let message = "";

  if (total === 0) {
    message = "Your list is empty.";
  } else if (checked === 0) {
    message = "Start packing!";
  } else if (checked === total) {
    message = "You are ready!";
  } else {
    message = `✅ ${percentage}% packed (${checked}/${total})`;
  }

  return (
    <footer className="text-sm text-center text-gray-500">{message}</footer>
  );
};

export default Footer;
