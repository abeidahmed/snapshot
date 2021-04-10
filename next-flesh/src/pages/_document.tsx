import Document, { Html, Head, Main, NextScript } from "next/document";

export default class ProjectDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="text-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
