import { css } from "../../styled-system/css";
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
        style={{ color: "secondary", hoge: "fuga" }}
      />
      <div className={css({ marginBlock: "m" })}>hoge</div>
      <div className={css({ color: "red.hoge" })}>redhoge</div>
      <div className={css({ color: "red.200" })}>red2</div>
      <div className={css({ color: "red.100" })}>red1</div>
    </main>
  );
}
