import { jsx } from "@emotion/react";

const random = ['red', 'orange','black', 'green']

export default function Title({ children }) {
  return <h1 css={{
      color : random[parseInt(Math.random() * random.length)],
  }}>{children}</h1>;
}
