import { css, cva, RecipeVariantProps } from "../../../styled-system/css";
// import { RESULT } from "./const";
// computed valueはno-dynamic-stylingのルールで引っかかる
export enum RESULT {
  OK = "ok",
  NG = "ng",
}

type P = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
  style: HeadingStyle;
} & React.HTMLAttributes<HTMLHeadingElement>;

// valueはno-dynamic-stylingのルールで引っかかる
const padding = "24px";
const heading = cva({
  base: {
    fontSize: "3xl",
    color: "primary",
  },
  variants: {
    color: {
      primary: { color: "primary", backgroundColor: "secondary" },
      secondary: { color: "white", backgroundColor: "orange" },
    },
    result: {
      [RESULT.OK]: {
        fontSize: "2xl",
        border: "1px solid red",
        padding: "24px",
      },
    },
  },
});

export type HeadingStyle = RecipeVariantProps<typeof heading>;
export const Heading = (props: P) => {
  return <props.as className={heading(props.style)}>{props.text}</props.as>;
};
