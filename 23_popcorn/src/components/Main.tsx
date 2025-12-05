import type { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => (
  <main className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
    {children}
  </main>
);

export default Main;
