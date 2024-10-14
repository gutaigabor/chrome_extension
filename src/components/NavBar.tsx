import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const NavBar = (props: Props) => {
  const { children } = props;
  return (
    <div className="sticky top-0 bg-slate-300 z-50">
      {children}
    </div>
  );
}
