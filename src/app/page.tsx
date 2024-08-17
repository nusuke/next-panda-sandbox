import { css } from "../../styled-system/css";

export default function Home() {
  return (
    <main
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "7xl",
      })}
    >
      <h2 className={css({ fontSize: "3xl", color: "primary" })}>見出しです</h2>
    </main>
  );
}
