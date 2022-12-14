import { FunctionComponent, InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputRootProps {
  children: ReactNode;
}
export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputIconProps {
  children: ReactNode;
}

const TextInputRoot = ({ children }: TextInputRootProps) => (
  <div className="flex items-center gap-3 py-3 px-4 rounded bg-gray-800 h-12 focus-within:ring-2 ring-cyan-300">
    {children}
  </div>
);

const TextInputIcon = ({ children }: TextInputIconProps) => (
  <Slot className="w-6 h-6 text-gray-400">{children}</Slot>
);

const TextInputInput = (props: TextInputInputProps) => (
  <input
    className="bg-tranparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
    {...props}
  />
);

TextInputRoot.displayName = "TextInput.Root";
TextInputInput.displayName = "TextInput.Input";
TextInputIcon.displayName = "TextInput.Icon";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
