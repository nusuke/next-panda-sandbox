import { css } from "../../../styled-system/css";
// import { computedPaddingValue } from "./const";

type P = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;

export const computedPaddingValue = "padding";
export const Button = (props: P) => {
  return (
    <button
      className={css({
        [computedPaddingValue]: "12px",
        fontSize: "lg",
        color: "white",
        backgroundColor: "primary",
        borderRadius: "md",
      })}
      {...props}
    >
      {props.children}
    </button>
  );
};
