import { Component } from "solid-js";
import { Link, Route, useRouter } from "solid-app-router";
import * as styles from "./app.styles";
import { link, main, main_layout } from "./styles/shared";

const App: Component = () => {
  const [router] = useRouter();
  return (
    <>
      <nav class={styles.nav}>
        <Link
          href="/"
          class={`${styles.title} ${link} ${
            router.location === "/" ? styles.no_underline : ""
          }`}
        >
          Artemiy's Toolbox
        </Link>
      </nav>
      <main class={router.location === "/" ? main : main_layout}>
        <Route />
      </main>
    </>
  );
};

export default App;
