import type { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => (
  <header className="flex items-center justify-between px-6 py-4 bg-gray-800 backdrop-blur-md shadow sticky top-0 z-50">
    {children}
  </header>
);

export default Header;
