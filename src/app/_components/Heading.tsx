import { css, cva, RecipeVariantProps } from "../../../styled-system/css";

type P = {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
  style: HeadingStyle;
} & React.HTMLAttributes<HTMLHeadingElement>;

const heading = cva({
  base: {
    fontSize: "3xl",
    color: "primary",
  },
  variants: {
    color: {
      primary: { color: "primary", backgroundColor: "secondary" },
      secondary: { color: "white", backgroundColor: "#df4d20" },
    },
    hoge: {
      fuga: { fontSize: "4xl", border: "1px solid red", padding: "[24px]" },
    },
  },
});

export type HeadingStyle = RecipeVariantProps<typeof heading>;
export const Heading = (props: P) => {
  return <props.as className={heading(props.style)}>{props.text}</props.as>;
};
