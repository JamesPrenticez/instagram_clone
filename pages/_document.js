import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
            rel="stylesheet"
          />

          {/* if (localStorage.theme === 'dark' || (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)){" "}
          {document.documentElement.classList.add("dark")} else{" "}
          {document.documentElement.classList.remove("dark")} */}
          
        </Head>
        <body className="bg-custom-background h-screen overflow-y-scroll scrollbar-hide">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
