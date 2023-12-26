import NextHead from "next/head";

const Head = () => {
  return (
    <NextHead>
      <title>Christmas Challenge</title>

      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#000000" />

      <meta
        property="og:site_name"
        content="Christmas Challenge by Walidoux."
      />
      <meta property="og:title" content="Landing Christmas Page" />
      <meta
        property="og:description"
        content="A beautiful landing page created by Walidoux and inspired from Bedimcode."
      />
      <meta property="og:locale" content="fr_FR, en_US" />

      <link
        rel="shortcut icon"
        href="icons/favicon/favicon.ico"
        type="image/x-icon"
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="icons/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="icons/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="icons/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="icons/favicon/site.webmanifest" />
    </NextHead>
  );
};

export default Head;
