import { cva, RecipeVariantProps } from "../../../styled-system/css";
import { RESULT } from "./const";

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
      secondary: { color: "white", backgroundColor: "orange" },
    },
    result: {
      /*
If it's the same file, it works as expected with panda css, but,
import from an external file will not be included in panda's AST.
TODO computed value is played by no-dynamic-styling rule.

```sh
pnpm panda debug
open styled-system/debug/src__app___components__Heading.ast.json
```

computed Value"result" is empty.
*/

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
