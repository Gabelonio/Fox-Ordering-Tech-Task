import { ReactNode, HTMLAttributes } from "react";

interface AsideProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Aside = ({ children, ...props }: AsideProps) => {
  return (
    <aside {...props}>
      {children}
    </aside>
  );
};

export default Aside;
