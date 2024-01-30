module.exports = (api) => {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [".js", ".ts", ".tsx", ".json", "svg", "png"],
          alias: {
            "@assets": "./assets",
          },
        },
      ],
    ],
  };
};
