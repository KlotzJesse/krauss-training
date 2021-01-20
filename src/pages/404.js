import * as React from "react";
import { Link } from "gatsby";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Not found</title>
      <h1>404. Page not found</h1>
      <br />
      <Link to="/">Go home</Link>.
    </main>
  );
};

export default IndexPage;
