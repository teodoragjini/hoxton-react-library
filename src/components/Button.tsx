import { Children } from "react";

type Props = {
  onClick: () => void;
  children: string;
};

export function Button({ children, ...props }: Props) {
  return (
    <button className="button"  {...props}>
      {children}
    </button>
  );
}
