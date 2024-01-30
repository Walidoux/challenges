import NextHead from "next/head";

const Head = () => {
  const data = {
    title: "Cawly - Better To-Do App",
    description: "Nothing here...",
  };

  return (
    <NextHead>
      <title>{data.title}</title>

      <meta name="description" content={data.description} />

      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};

export default Head;
