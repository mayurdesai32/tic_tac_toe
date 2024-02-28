module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    Plugin: [
      [
        "module-resolver",
        {
          alias: {
            "@screens": "./src/screens",
            "@utils": "./src/utils",
            "@config": "./src/config",
            "@components": "./src/components",
            "@assets": "./assets",
          },
        },
      ],
    ],
  };
};
