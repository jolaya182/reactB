module.exports = {
  presets: [
   [ "@babel/preset-env",{debug:false, useBuiltIns:"usage", corejs: 3.0}],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
//   plugins: ["react-refresh/babel"]
};
