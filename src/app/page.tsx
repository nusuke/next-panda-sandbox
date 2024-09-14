import { css } from "../../styled-system/css";
import { RESULT } from "./_components/const";
import { Heading } from "./_components/Heading";

export default function Home() {
  return (
    <main
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "full",
        height: "screen",
      })}
    >
      <Heading
        as="h1"
        text="Hello, world!"
        style={{ color: "secondary", result: RESULT.OK }}
      />
    </main>
  );
}
