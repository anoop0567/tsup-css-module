module.exports = {
  plugins: [
    require("postcss-modules")({
      generateScopedName: "[name]__[local]___[hash:base64:5]",
      getJSON: () => {
        return;
      },
    }),
  ],
};
