import React, { ElementType, ReactNode } from "react";

type TextProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children">;

const Text = <T extends ElementType = "p">({
  as,
  children,
  ...props
}: TextProps<T>) => {
  const Component = as || "p";
  return <Component {...props}>{children}</Component>;
};

export default Text;
