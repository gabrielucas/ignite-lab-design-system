import { FunctionComponent, ReactNode } from "react";

import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  asChild,
}) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp className="py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm h-12 w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white">
      {children}
    </Comp>
  );
};
